import React from 'react'
import {hideProgressBar, showProgressBar} from '../store/actionCreators'
import {isFunction, error, assert} from '../assets/utils'
import {connect} from 'react-redux'
import ErrorBoundary from './ErrorBoundary'


const withAsyncData = fetchAsyncData => Target => {
  class WithAsyncData extends React.Component {
    static WithAsyncData = 'WithAsyncData';
    state = {
      finish: false,
      asyncData: {},
    }
    UNSAFE_componentWillMount() {
      if(assert(isFunction, fetchAsyncData)) {
        let promise = fetchAsyncData()
        if(promise && promise.then) {
          this.props.showProgressBar()
          promise.then(data => {
            this.setState({
              asyncData: data,
            })
            this.finish()
          }).catch(err => {
            error(err);
            this.caughtError('fetch async data error!')
          })
        } else {
          setTimeout(() => {
            this.setState({
              asyncData: promise,
              finish: true,
            })
          })
        }
      }
    }

    componentWillUnmount() {
      // console.log('componentWillUnmount')
      // this.finish()
    }

    finish = () => {
      this.setState({
        finish: true,
      })
      this.props.hideProgressBar()
    }

    caughtError = () => {
      this.finish()
    }
    render() {
      return this.state.finish ? <ErrorBoundary><Target asyncData={this.state.asyncData} {...this.props}/></ErrorBoundary> : null;
    }
  }

  const mapStateToProps = {
    hideProgressBar, showProgressBar
  }
  return connect(null, mapStateToProps)(WithAsyncData)
}

export default withAsyncData
