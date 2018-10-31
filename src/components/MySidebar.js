import React from 'react';
import {List, ListItem, ListItemText, withStyles, Collapse} from '@material-ui/core'
import {ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import classnames from 'classnames'
import menus from '../assets/menus'

const styles = theme => {
  let unit = theme.spacing.unit;
  return {
    root: {
      width: 200,
      margin: `${unit}px ${unit}px 0 0`,
      transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
      overflow: 'hidden',
      '&.collapsed': {
        width: 0,
      }
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
    const {classes, sideBarVisible} = this.props;
    function getMenuItem (item, i) {
      return item.subMenus ? (<NestListItem  key={i} {...item} />)
      : (<ListItemLink key={i} {...item}/>);
    }
    return <aside className={classnames(classes.root, sideBarVisible ? '' : 'collapsed')}>
      <List>
        {menus.map((item, i) => getMenuItem(item, i))}
      </List>
    </aside>
  }
}


const mapStateToProps = state => ({
  sideBarVisible: state.header.sideBarVisible,
})


export default withStyles(styles)(connect(mapStateToProps)(MySidebar))