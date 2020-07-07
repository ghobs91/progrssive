import { Card, CardContent, CardHeader, CircularProgress, IconButton, makeStyles, Typography, Button } from "@material-ui/core";
import { Share } from "@material-ui/icons";
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router";
import { loadMobilizedContent } from "../actions/entry";
import AppBarButton from "../components/AppBarButton";
import Centre from "../components/Centre";
import StackPanel from "../components/StackPanel";
import { useDoubleTap } from "../hooks/callbacks";
import { useEntry } from "../hooks/entry";
import { useOnMount } from "../hooks/lifeCycle";
import { useIsPhone } from "../hooks/responsive";
import { useStore } from "../hooks/store";
import { EntryReadButton } from "../MarkerButton";
import { Entry } from "../model/entry";
import { getEntryByline, getEntryContent, getEntryPreferredView, getEntryUrl } from "../services/entry";
import LinkButton from "../components/LinkButton";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    '@global': {
        'article': {
            color: theme.palette.text.primary
        },
        'article img': {
            width: '100%',
            height: 'auto'
        },
        'article figure': {
            margin: 0
        },
        'article iframe': {
            maxWidth: '100%',
            height: 'auto'
        },
        'article a': {
            color: theme.palette.info.main
        }
    },
    titleLink: {
        textDecoration: 'none'
    },
    shareButton: {
    }
}));

const useScrollToTop = (entry: Entry, ref: React.MutableRefObject<any>) => {
    useEffect(() => {
        if (!entry || !ref || !ref.current) return;

        ref.current.parentElement.scrollTo(0, 0);
    }, [entry, ref]);
}

export default (props: { id: string }) => {
    const store = useStore();
    const history = useHistory();

    const styles = useStyles();
    const isPhone = useIsPhone();
    const domElement = useRef(null);
    const entry = useEntry(props.id);
    const preferredView = getEntryPreferredView(entry);
    const [failedToMobilize, setFailedToMobilize] = useState(false);

    useScrollToTop(entry, domElement);
    useOnMount(() => {
        // If this article should be displayed with the mozilla
        // mobilizer, load the mobilized content.
        if (preferredView === "mozilla") {
            loadMobilizedContent(props.id)
                .catch(() => {
                    setFailedToMobilize(true);
                    window.snackHelper.enqueueSnackbar("Failed to mobilize article! Are you offline?");
                });
        }
    });

    const doubleTap = useDoubleTap((event) => {
        if (!store.settings.doubleTapToCloseArticles)
            return;

        history.goBack();
        event.stopPropagation();
        // Clear potential accidental selection.
        document.getSelection().removeAllRanges();
    }, []);

    const shareArticle = useCallback(() => {
        navigator.share({
            title: entry.title,
            url: getEntryUrl(entry)
        });
    }, [entry]);

    const url = getEntryUrl(entry);

    if (!entry) {
        return <Centre>
            <CircularProgress />
        </Centre>;
    }

    const content = preferredView === "mozilla"
        ? entry.mobilized && entry.mobilized.content
        : getEntryContent(entry);

    const title = url
        ? <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className={styles.titleLink}>
            {entry.title}
        </a>
        : entry.title;

    const article = <>
        <CardHeader
            title={title}
            subheader={getEntryByline(entry)} />
        <CardContent>
            {content
                ? <Typography component='small'>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </Typography>
                : <StackPanel center>
                    <Typography component="small">
                        {failedToMobilize
                            ? "Failed to mobilize article."
                            : "Mobilizing..."}
                    </Typography>
                    {failedToMobilize
                        ? <StackPanel direction="row">
                            <Button variant="outlined">View Feedly</Button>
                            <Button
                                variant="outlined"
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer">
                                Open in Browser
                            </Button>
                        </StackPanel>
                        : <CircularProgress />}

                </StackPanel>}
        </CardContent>
    </>;

    return <article className={styles.root} ref={domElement} onClick={doubleTap}>
        {isPhone
            ? article
            : <Card>{article}</Card>}
        {!entry.transient && <AppBarButton>
            <EntryReadButton entryId={entry.id} />
        </AppBarButton>}
        {navigator.share && <AppBarButton>
            <IconButton
                className={styles.shareButton}
                onClick={shareArticle}>
                <Share />
            </IconButton>
        </AppBarButton>}
    </article>;
};