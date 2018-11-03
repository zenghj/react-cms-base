/**
 * this is a demo
 */
import React from 'react';
import { withStyles } from '@material-ui/core';
import axios from 'Plugins/axios';
import withAsyncData from 'Components/WithAsyncData';

const styles = theme => {
  return {
    root: {}
  };
};

class DemoPage extends React.Component {
  state = {};
  render() {
    const { classes, asyncData } = this.props;
    const {} = this.state;
    return <div className={classes.root}>
      <h1>Demo page</h1>
    </div>;
  }
}

// if not need async data
// export default withStyles(styles)(DemoPage)

// if need async data to init page
export default withAsyncData(async function fetchAsyncData() {
  // use async function for convenient
  // fetch async data
  let asyncData;
  return asyncData; // the promise resolved value will be placed in `this.props.asyncData`
})(withStyles(styles)(DemoPage));
