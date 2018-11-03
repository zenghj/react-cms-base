import React from 'react'
import {withStyles} from '@material-ui/core'
import {
  SentimentDissatisfied as SentimentDissatisfiedIcon
} from '@material-ui/icons'

const styles = theme => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorIcon: {
      fontSize: 80,
    }
  }
}
class Demo extends React.Component {
  // state = {
  // }

  render() {
    const {classes} = this.props;
    // const {} = this.state;
    return <div className={classes.root}>
      <h1>Page Not Found!</h1>
      <SentimentDissatisfiedIcon className={classes.errorIcon}/>
    </div>
  }
}

export default withStyles(styles)(Demo)