import React, {Component} from 'react'

export default (beforeEnter, LoadingComponent) => Target => {
  class OnEnter extends Component {
    static displayName = 'OnEnter'
    state = {
      done: false,
    }

    UNSAFE_componentWillMount() {
      const promise = beforeEnter(this.props)
      if(promise && promise.then) {
        promise.then(() => {
          this.setState({
            done: true,
          })
        })
      } else {
        this.setState({
          done: true,
        })
      }
    }

    render() {
      const Loading = LoadingComponent ? <LoadingComponent {...this.props}/> : null
      return this.state.done ? <Target {...this.props} /> : Loading
    }
  }

  return OnEnter
}
