import React from 'react'
import {withStyles} from '@material-ui/core'
import {
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon
} from '@material-ui/icons'

const styles = theme => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.error.dark,
    },
    errorIcon: {
      fontSize: 80,
    }
  }
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const {classes} = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className={classes.root}>
        <h1>Something Went Wrong!</h1>
        <SentimentVeryDissatisfiedIcon className={classes.errorIcon}/>
      </div>;
    }
    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary)