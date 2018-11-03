/**
 * this is a demo
 */

import React from 'react'
import {withStyles} from '@material-ui/core'
import {
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon
} from '@material-ui/icons'

const styles = theme => {
  return {
    root: {
    },
  }
}
class Demo extends React.Component {
  state = {
  }

  render() {
    const {classes} = this.props;
    const {} = this.state;
    return <div className={classes.root}></div>
  }
}

export default withStyles(styles)(Demo)