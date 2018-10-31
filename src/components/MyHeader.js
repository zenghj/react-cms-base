import React from 'react';
import { withStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import {connect} from 'react-redux'
import classnames from 'classnames'
import * as actionCreators from '../store/actionCreators'

const styles = theme => ({
  root: {
    flexGrow: 1,
    '& .menu-icon': {
      transition: 'transform 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms', 
      transform: 'rotate(0deg)',
      '&.rotated': {
        transform: 'rotate(180deg)',
      }
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
  render() {
    const { classes, menus, toggleSidebarRx, headerRx} = this.props;
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
              <MenuIcon className={classnames(headerRx.sideBarVisible ? '' : 'rotated', 'menu-icon')}/>
            </IconButton>
            <h1 className={classes.title}>内容管理系统</h1>
            {menus}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// MyHeader.propTypes = {

// };
const mapStateToProps = state => ({
  headerRx: state.header,
})

const mapDispatchToProps = {
  toggleSidebarRx: actionCreators.toggleSidebar
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MyHeader));
