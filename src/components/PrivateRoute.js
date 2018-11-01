import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



class PrivateRoute extends React.Component {
  render() {
    const {component: Component, common, ...rest} = this.props
    const isLogined = common.isLogined

    return <Route 
      {...rest}
      render={props => {
        return isLogined ? <Component {...props}/> : <Redirect to={{
          pathname: '/sign-in'
        }}/>
      }}
    />
  }
}

const mapStateToProps = state => ({
  common: state.common,
})
export default connect(mapStateToProps)(PrivateRoute)


