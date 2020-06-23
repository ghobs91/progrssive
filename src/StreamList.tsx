import { CircularProgress, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";
import { FixedSizeList } from 'react-window';
import { setUnread } from './actions/marker';
import EntryCard from './EntryCard';
import { useStreamEntries, useStreamEntry } from './hooks/entry';
import { useScreenSize } from './hooks/screenSize';
import { useStore } from './hooks/store';
import { getEntrySubscription, getEntryUrl } from './services/entry';
import { loadToEntry } from './services/store';

interface Props {
}

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default (props: Props) => {
    const GUTTER_SIZE = 8;
    const BUFFER_ENTRY_COUNT = 20;

    const styles = useStyles();
    const { width, height } = useScreenSize();

    const history = useHistory();

    const store = useStore();
    const loadedEntries = useStreamEntries();
    const markScrolledAsRead = store.settings.markScrolledAsRead;

    const [lastVisibleStartIndex, setLastVisibleStartIndex] = useState(0)
    const onItemsRendered = useCallback(async ({ visibleStartIndex, visibleStopIndex }) => {
        if (!markScrolledAsRead)
            return;

        for (let i = lastVisibleStartIndex; i < visibleStartIndex; ++i) {
            const entry = loadedEntries[i];
            setUnread(entry, false);
        }

        setLastVisibleStartIndex(visibleStartIndex);

        if (visibleStopIndex%BUFFER_ENTRY_COUNT === 0 || loadedEntries.length === 0)
            loadToEntry(visibleStopIndex+BUFFER_ENTRY_COUNT);
    }, [lastVisibleStartIndex, loadedEntries, markScrolledAsRead]);

    return <FixedSizeList
        className={styles.root}
        height={height - 62 - GUTTER_SIZE * 2}
        itemSize={208}
        itemCount={store.stream.length}
        width={Math.min(800, width)}
        itemKey={(index) => index < loadedEntries.length ? loadedEntries[index].id : index}
        onItemsRendered={onItemsRendered}>
        {rowProps => {
            const item = useStreamEntry(rowProps.index);

            const newStyle = {
                ...rowProps.style,
                top: rowProps.style.top + GUTTER_SIZE,
                left: rowProps.style.left + GUTTER_SIZE,
                right: GUTTER_SIZE,
                width: `100% - ${GUTTER_SIZE * 2}`
            };
            return item ? <div
                style={newStyle}
                onClick={() => {
                    const subscription = getEntrySubscription(item);
                    if (subscription && subscription.preferredView === "browser") {
                        window.open(getEntryUrl(item), "_blank");
                    } else {
                        history.push(`/entries/${item.id}`);
                    }
                }}
            >
                <EntryCard entry={item} showingUnreadOnly={store.settings.unreadOnly} />
            </div>
            : <div style={newStyle}>
                <CircularProgress/>
            </div>;
        }}
    </FixedSizeList>
}