import { CircularProgress, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import EntryCard from "./EntryCard";
import { useStream } from './hooks/stream';
import { useStore } from './hooks/store';
import AppBarButton from './components/AppBarButton';
import { Refresh } from '@material-ui/icons';
import { updateStreams } from './actions/stream';
import { getStream } from './services/store';

const useStyles = makeStyles({
  root: {
  }
});

type Props = RouteComponentProps<any>;

export default withRouter((props: Props) => {
  // We have to manually parse the path, because redux router breaks.
  const prefix = 'stream/';
  const streamId = props.location.pathname.substr(prefix.length + 1);

  const classes = useStyles();
  const store = useStore();
  const stream = getStream(streamId);

  useEffect(() => {
    if (stream) return;
    updateStreams(streamId);
  }, [streamId]);
  
  if (!stream || !stream.items)
    return <CircularProgress/>;

  return <div className={classes.root}>
    <Grid spacing={24} container justify='center' wrap='wrap'>
      {stream.items.map(e => <Grid item key={e.id} lg={3} md={6} sm={6} xs={12} onClick={() => props.history.push(`/entries/${e.id}`)}>
        <EntryCard entry={e}/>
      </Grid>)}
    </Grid>
    <AppBarButton>
      <IconButton>
        <Refresh/>
      </IconButton>
    </AppBarButton>
  </div>
});