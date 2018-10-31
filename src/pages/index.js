import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Home extends React.Component {
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
  }
  render() {
    
    const {isLogined, user} = this.props.home
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
    home: state.home
  }
}

const mapDispatchToProps = {
  setLogin: actionCreators.setLogin,
  setUserName: actionCreators.setUserName
}

// export default connect(mapStateToProps, actionCreators)(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Home)

