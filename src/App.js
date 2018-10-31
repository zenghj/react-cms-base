import React, { Component } from 'react';
import { withStyles, Paper } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import classnames from 'classnames';

import MyHeader from './components/MyHeader';
import MySidebar from './components/MySidebar';
// import Home from './pages';
import './App.css';
import getRoutes from './router'

const styles = theme => {
  window.theme = theme;
  const unit = theme.spacing.unit;
  return {
    root: {
      '& .main-container': {
        marginTop: 64,
        display: 'flex',
        flexDirection: 'row'
      }
    },
    sideNavs: {
      width: 200,
      marginRight: unit
    },
    mainBody: {
      flexGrow: 1,
      marginTop: unit * 2,
      marginRight: unit * 2,
      marginBottom: unit * 2,
      padding: unit * 2,
      minHeight: 400
    }
  };
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classnames(classes.root, 'App')}>
        <MyHeader />
        <main className="main-container">
          <MySidebar />
          <Paper className={classes.mainBody}>
            <Switch>
              {getRoutes().map((route, i) => (<Route exact key={i} path={route.path} component={route.component} />))}
            </Switch>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
