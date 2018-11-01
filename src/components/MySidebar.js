import React from 'react';
import {List, ListItem, ListItemText, withStyles, Collapse} from '@material-ui/core'
import {ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon} from '@material-ui/icons'
import {Link} from 'react-router-dom'

import classnames from 'classnames'
import menus from '../assets/menus'
import {sidebarWidth} from '../assets/dimentions'

const styles = theme => {
  let unit = theme.spacing.unit;
  return {
    root: {
      width: sidebarWidth,
      margin: `${unit}px ${unit}px 0 0`,
    },
  }
}
function ListItemLink(props) {
  return <Link to={props.path} key={props.i}>
  <ListItem button>
    <ListItemText>{props.label}</ListItemText>
  </ListItem> 
  </Link> 
}

class NestListItem extends React.Component {
  state = {
    open: false
  }
  toggle = (e) => {
    this.setSubmenuVisible(!this.state.open);
  }
  setSubmenuVisible = visible => {
    this.setState({
      open: visible,
    });
  }

  render() {
    const {label, subMenus} = this.props
    return <React.Fragment>
      <ListItem button onClick={this.toggle}>
        <ListItemText>{label}</ListItemText>
        {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <List style={{paddingLeft: '1em'}}>
          {subMenus.map((item, i) => (
            <ListItemLink key={i} {...item}/>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  }
}

class MySidebar extends React.Component {
  render() {
    const {classes} = this.props;
    function getMenuItem (item, i) {
      return item.subMenus ? (<NestListItem  key={i} {...item} />)
      : (<ListItemLink key={i} {...item}/>);
    }
    return <aside className={classnames(classes.root)}>
      <List>
        {menus.map((item, i) => getMenuItem(item, i))}
      </List>
    </aside>
  }
}

export default withStyles(styles)(MySidebar)