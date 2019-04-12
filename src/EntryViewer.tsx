import { Card, CardContent, CardHeader, CircularProgress, Typography, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from 'react';
import {useEffect} from 'react';
import { useIsPhone } from "./hooks/responsive";
import { useEntry } from "./hooks/stream";
import { getEntryByline, getEntryContent } from "./services/entry";
import { getStore, useStore } from "./hooks/store";
import { updateEntry } from "./actions/entry";
import AppBarButton from "./components/AppBarButton";
import { EntryReadButton, EntrySavedButton } from "./MarkerButton";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    '@global': {
        'article img': {
            width: '100%'
        },
        'article figure': {
            margin: 0
        }
    }
});

export default (props: { entryId: string }) => {
    const store = useStore();

    const styles = useStyles();
    const isPhone = useIsPhone();

    const entry = store.entries[props.entryId];

    useEffect(() => {
        if (entry || !props.entryId) return;
        updateEntry(props.entryId);
    }, [props.entryId]);

    if (!entry) 
        return <CircularProgress/>;

    const content = getEntryContent(entry);

    const article = <>
        <CardHeader
            title={entry.title}
            subheader={getEntryByline(entry)} />
        {content && <CardContent>
            <Typography component="small">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Typography>
        </CardContent>}
    </>;

    return <article className={styles.root}>
        {isPhone
            ? article
            : <Card>{article}</Card>}
        <AppBarButton>
            <EntryReadButton entry={entry}/>
        </AppBarButton>
        <AppBarButton>
            <EntrySavedButton entry={entry}/>
        </AppBarButton>
    </article>;
}