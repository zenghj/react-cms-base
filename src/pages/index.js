import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import {TextField, MenuItem} from '@material-ui/core'
import RouteComponent from '../components/RouteComponent'


class Home extends RouteComponent {
  
  state = {}
  componentDidMount() {
    console.log(this)
    window.TEST = this;
  }
  login = e => {
    this.props.setLogin(true)
  }
  logout = e => {
    this.props.setLogin(false)
    this.props.history.push('/sign-in')
  }
  render() {
    const {isLogined, user} = this.props.common
    console.log('rerender', user)
    return <div>
      <h2>Home page</h2>
      { isLogined && <p>
        <button onClick={this.logout}>logout</button><br/>
        Hello {user.name}! 
        Today is {(new Date()).toDateString()}
        
        </p>}
      { !isLogined && <p><button onClick={this.login}>login</button><br/>please login</p> }
    </div>
  }
}

function mapStateToProps(state) {
  return {
    common: state.common
  }
}

const mapDispatchToProps = {
  setLogin: actionCreators.setLogin,
  setUserName: actionCreators.setUserName
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

