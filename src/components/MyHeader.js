import React from 'react';
import { withStyles, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import {connect} from 'react-redux'
import classnames from 'classnames'
import * as actionCreators from '../store/actionCreators'
import {appConfig} from 'Config'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    '& .menu-icon': {
      transition: 'transform 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms', 
      transform: 'rotate(0deg)',
      '&.rotated': {
        transform: 'rotate(180deg)',
      }
    },
    '& .white': {
      color: '#fff',
    }
  },
  menuButton: {
    // margin: '0 1.2em 0 1em'
  },
  title: {
    flexGrow: 1,
    fontSize: '1.3em',
  }
});
class MyHeader extends React.Component {
  signOut = e => {
    this.props.setLogin(false)
    // this.props.history.push('/sign-in')
  }
  render() {
    const { classes, toggleSidebarRx, commonRx} = this.props;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={toggleSidebarRx}
            >
              <MenuIcon className={classnames(commonRx.sideBarVisible ? '' : 'rotated', 'menu-icon')}/>
            </IconButton>
            <h1 className={classes.title}>{appConfig.title}</h1>
            <span>{commonRx.user.name}</span>
            <Button onClick={this.signOut} className="white">Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// MyHeader.propTypes = {

// };
const mapStateToProps = state => ({
  commonRx: state.common
})

const mapDispatchToProps = {
  toggleSidebarRx: actionCreators.toggleSidebar,
  setLogin: actionCreators.setLogin,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MyHeader));
