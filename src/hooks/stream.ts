import { useEffect } from "react";
import { getStream, getAllStreams } from "../api/streams";
import { Entry } from "../model/entry";
import { Stream } from "../model/stream";
import { setAllStreams } from "../services/store";
import { useStore } from "./store";
import { executeOnce } from "./promise";
import { useProfile } from "./profile";

export const useStreams = () => {
    const store = useStore();
    const profile = useProfile();

    const streams = store.streams;

    // If we haven't the streams, get them from the internet.
    executeOnce((profileId) => {
        if (!profileId) return;

        return !streams && getAllStreams(profileId).then(streams => setAllStreams(profileId, streams));
    }, profile && profile.id);

    return streams;
}

export const useStream = (streamId: string): Stream => {
    const store = useStore();
    const streams = store.streams;

    // If it's a feed
    if (streamId.startsWith('feed/')) {
        return {
            id: streamId,
            items: Object.values(store.entries).filter(e => e.origin.streamId === streamId),
            title: 'Feed'
        };
    }

    // If it's a tag
    if (streamId.includes('/tag/')) {
        return {
            id: streamId,
            items: Object.values(store.entries).filter(e => e.tags && e.tags.some(t => t.id === streamId)),
            title: 'Tag'
        };
    }
    const stream = streams[streamId];

    return stream
        ? {
            ...stream,
            items: stream.items.map(i => store.entries[i])
        }
        : undefined;
}

export const useEntries = (): Entry[] => {
    const store = useStore();
    useStreams();

    return Object.values(store.entries);
}

export const useEntry = (entryId: string): Entry => {
    const store = useStore();
    useStreams();

    return store.entries[entryId];
}

export const useFeeds = (feedId: string): Entry[] => {
    const entries = useEntries();
    return entries.filter(e => e.origin.streamId === feedId);
}