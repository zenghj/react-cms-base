import React, {Component} from 'react'
import {primary} from '../assets/color'
import {withStyles} from '@material-ui/core'

let _theme = {}
const styles = theme => ({
  root: {
    '& .loading-wrapper': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      // background: 
    },
    '& .loading': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }
  },

})
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
        }).catch(err => {
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
      const {classes} = this.props
      const Loading = LoadingComponent 
        ? (<div className="loading-wrapper">
            <LoadingComponent 
              className='loading' 
              type="spinningBubbles"
              color={primary.dark}
              width={64 * 2}
              height={64 * 2}
              delay={150}
              {...this.props}/>
          </div>) 
        : null
      return <div className={classes.root}>
        {this.state.done ? <Target {...this.props} /> : Loading}
      </div>
    }
  }

  return withStyles(styles)(OnEnter)
}
