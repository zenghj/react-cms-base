import React, { Component } from 'react';
import { withStyles, Paper, LinearProgress } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux'

import MyHeader from './components/MyHeader';
import MySidebar from './components/MySidebar';
import onEnter from './components/onEnter'
import ReactLoading from 'react-loading';
// import Home from './pages';
import './App.css';
import getRoutes from './router'
import {sidebarWidth} from './assets/dimentions'
import axios from './plugins/axios'

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
    progressBar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
    },
    progressColorPrimary: {
      backgroundColor: '#ffc107',
    },
    progressBarColorPrimary: {
      backgroundColor: '#FF9800',
    },

    sideNavs: {
      width: 200,
      marginRight: unit
    },
    mainBody: {
      position: 'relative',
      flexGrow: 1,
      marginTop: unit * 2,
      marginRight: unit * 2,
      marginBottom: unit * 2,
      padding: unit * 2,
      minHeight: 400,
      transition: 'margin-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
      zIndex: 10,
      '&.slide-left': {
        marginLeft: -sidebarWidth,
      }
    }
  };
};

class App extends Component {
  render() {
    const { classes, sideBarVisible = true, isProgressBarVisible = false } = this.props;
    return (
      <div className={classnames(classes.root, 'App')}>
        {isProgressBarVisible && <LinearProgress
          className={classes.progressBar} 
          classes={{
            colorPrimary: classes.progressColorPrimary,
            barColorPrimary: classes.progressBarColorPrimary,
          }}/>}
        <MyHeader />
        <main className="main-container">
          <MySidebar />
          <Paper className={classnames(classes.mainBody, sideBarVisible ? '' : 'slide-left')}>
            <Switch>
              {getRoutes().map((route, i) => (<Route exact key={i} path={route.path} component={route.component} />))}
            </Switch>
          </Paper>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sideBarVisible: state.common.sideBarVisible,
  pageInited: state.common.pageInited,
  isProgressBarVisible: state.common.isProgressBarVisible
})



export default onEnter(function beforeEnter() {
  return Promise.all([
    axios.get('http://45.62.111.182:3389/mock/cms/userinfo'),
  ])
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 6000);
  // })
}, ReactLoading)(withStyles(styles)(connect(mapStateToProps)(App)))
// export default 
// export default connect(mapStateToProps)(withStyles(styles)(App))
// export default withStyles(styles)(App)
// export default connect(mapStateToProps)(App)