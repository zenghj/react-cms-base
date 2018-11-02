import React from 'react'
import {hideProgressBar, showProgressBar} from '../store/actionCreators'
import store from '../store'
import {isFunction, error} from '../assets/utils'

class RouteComponent extends React.Component {
  state = {
    _finish: false,
  }

  UNSAFE_componentWillMount() {
    let asyncData = this.asyncData

    if(isFunction(asyncData)) {
      // if(!this.render && isFunction(this.asyncRender)) {
      //   this.render = () => {
      //     let asyncRender = this.asyncRender
      //     return this.state._finish ? asyncRender.call(this) : null;
      //   }
      // }
      this.showProgressBar()
      let promise = asyncData.call(this, this.props)
      if(promise && promise.then) {
        promise.then(res => {
          if(res) {
            this.setState({
              ...res
            }, () => {
              this.finish()
            })
          } else {
            this.finish()
          }
          
        }, (err) => {
          error(err);
          this.finish()
        })
      
      } else {
        // this.setState({})
        this.finish()
      }
    }
    
  }
  componentWillUnmount() {
    this.finish();
  }

  finish = () => {
    this.hideProgressBar()
    this.setState({
      _finish: true,
    })
  }

  isAsyncFinished = () => {
    return (isFunction(this.asyncData) && this.state._finish) 
      || !isFunction(this.asyncData)
  }
  showProgressBar = () => {
    store.dispatch(showProgressBar())
  }
  hideProgressBar = () => {
    store.dispatch(hideProgressBar())
  }

  // 父组件render，如果子组件提供了asyncRender方法，则使用asyncRender，否则子组件的render方法会覆盖此方法
  render() {
    let asyncRender = this.asyncRender
    return this.state._finish ? asyncRender.call(this) : null;
  }
}

// 用redux connect 包裹一下会出问题，可能是多级继承会出问题
export default RouteComponent