import { Entry } from "../model/entry";
import { updateRead, updateSaved } from "../api/markers";
import { getSavedId as getSavedTag } from "../api/streams";

export const setUnread = async (entry: Entry, unread: boolean) => {
    entry.unread = unread;
    await updateRead(entry, entry.unread);
}

export const setSaved = async (entry: Entry, saved: boolean, profileId: string) => {
    const tagId = getSavedTag(profileId);
    if (!saved) {
        entry.tags = entry.tags.filter(e => e.id !== tagId);
    } else {
        entry.tags = [...(entry.tags || []), {
            id: tagId,
            label: 'Saved For Later'
        }];
    }

    await updateSaved(entry, saved);
}