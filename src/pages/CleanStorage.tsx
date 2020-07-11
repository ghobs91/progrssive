import { Button, makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import React, { useCallback, useState } from 'react';
import ListOptionToggle from '../components/ListOptionToggle';
import { useResult } from '../hooks/promise';
import { useStore } from '../hooks/store';
import { getDb } from '../services/db';

interface CleanSettings {
    articles?: boolean;
    subscriptions?: boolean;
}

const useStyles = makeStyles(theme => ({
    deleteButton: {
    }
}));

export default (props) => {
    const store = useStore();
    const styles = useStyles();
    const [clean, setClean] = useState<CleanSettings>({ articles: true });
    const onChange = useCallback((e, value) => {
        setClean({
            ...clean,
            [e.target.name]: value
        });
    }, [clean]);

    const usage = useResult(async () => {
        const estimate = await navigator.storage.estimate();
        const {friendlyBytes} = await import('../utils/bytes');
        return `Currently using ${friendlyBytes(estimate.usage)} of storage.`
    }, [store.entries], "Calculating storage usage...");

    const articles = useResult(async () => {
        const db = await getDb();
        const count = await db.entries.count();
        return count + "";
    }, [store.entries], '{calculating}')

    const deleteStorage = useCallback(async () => {
        const db = await getDb();
        if (clean.articles) {
            db.entries.clear();
            store.stream = {
                id: 'unknown stream',
                lastScrollPos: 0,
                length: 0,
                loadedEntries: [],
                unreadOnly: true,
            };
            store.entries = {};
        }

        if (clean.subscriptions){
            db.subscriptions.clear();
            // TODO?
        }
    }, [clean]);

    return <div>
        <Typography variant="h4">
            Clean up storage space.
        </Typography>
        <Typography variant="subtitle2">
            {usage}
        </Typography>
        <List>
            <ListOptionToggle
                value={clean.articles}
                onChange={onChange}
                name="articles"
                primaryText="Delete Articles"
                secondaryText={`Delete ${articles} downloaded articles. Note: Some may come back on the next sync.`} />
            <ListOptionToggle
                value={clean.subscriptions}
                onChange={onChange}
                name="subscriptions"
                primaryText="Delete Subscriptions"
                secondaryText="Warning! This will delete all your subscriptions. It is not recommended." />
        </List>
        <Button variant="contained" className={styles.deleteButton} onClick={deleteStorage}>
            Clean
        </Button>
    </div>;
}