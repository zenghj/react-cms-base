import React from 'react';
import {List, ListItem, ListItemText, withStyles, Collapse} from '@material-ui/core'
import {ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, History} from '@material-ui/icons'
import {Link, withRouter} from 'react-router-dom'

import classnames from 'classnames'
import menus from '../assets/menus'
import {sidebarWidth} from '../assets/dimentions'

const styles = theme => {
  let unit = theme.spacing.unit;
  return {
    root: {
      margin: `${unit}px ${unit}px 0 0`,
    },
    list: {
      width: sidebarWidth,
    }
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
  UNSAFE_componentWillMount() {
    let history = this.props.history || {}
    let pathname = history.location.pathname
    console.log(pathname)
    let open = this.props.subMenus.map(item => item.path).includes(pathname)
    this.setState({
      open
    })
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
const WithRouterNestListItem = withRouter(NestListItem)

class MySidebar extends React.Component {
  render() {
    const {classes} = this.props;
    console.log(this)
    function getMenuItem (item, i) {
      return item.subMenus ? (<WithRouterNestListItem  key={i} {...item} />)
      : (<ListItemLink key={i} {...item}/>);
    }
    return <aside className={classnames(classes.root)}>
      <List className={classes.list}>
        {menus.map((item, i) => getMenuItem(item, i))}
      </List>
    </aside>
  }
}

export default withStyles(styles)(MySidebar)