import { IconButton, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppDrawer from './AppDrawer';
import EntryViewer from './EntryViewer';
import StreamViewer from './StreamViewer';
import { theme } from './theme';

const useStyles = makeStyles({
  root: {
    margin: '10px',
  }
});

export const App = (props) => {
  const styles = useStyles();

  return <BrowserRouter>
    <ThemeProvider theme={theme}>

      <AppBar position="static" color="primary">
        <Toolbar>
          <AppDrawer trigger={
            <IconButton>
              <MenuIcon />
            </IconButton>} />
          <Typography variant="title">Progrssive Reader</Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.root}>
        <Switch>
          <Route path='/stream/:streamId*' component={StreamViewer} />
          <Route path='/entries/:entryId*' component={EntryViewer} />
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>;
}

export default App;
