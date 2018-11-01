import React from 'react';
import {withStyles, Paper, Avatar, TextField, Button} from '@material-ui/core'
import {Lock as LockIcon,} from '@material-ui/icons'
import {connect} from 'react-redux'
import {setLogin} from '../store/actionCreators'
 
const styles = theme => ({
  root: {
    '& .font-large': {
      fontSize: 24,
    }
  },
  main: {
    width: 360,
    margin: '64px auto 0',
    display: 'flex',
    padding: '16px 24px 24px',
    alignItems: 'center',
    flexDirection: 'column',
  },
  lock: {
    backgroundColor: '#e10050',
  },
  submit: {
    marginTop: 24,
  },
})

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  }
  handleFieldsChange = key => e => {
    this.setState({[key]: e.target.value})
  }
  handleSubmit = e => {
    this.props.setLogin()
    this.props.history.push('/')
  }
  render() {
    const {classes} = this.props;
    const state = this.state;
    if(this.props.isLogined) {
      this.props.history.push('/')
      return null;
    }
    return <div className={classes.root}>
      <Paper className={classes.main}>
        <Avatar className={classes.lock}>
          <LockIcon/>
        </Avatar>
        <p className="font-large">Sign In</p>
        <TextField fullWidth label="username" value={state.username} onChange={this.handleFieldsChange('username')}></TextField>
        <TextField fullWidth label="password" value={state.password} onChange={this.handleFieldsChange('password')}></TextField>

        <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={this.handleSubmit}>Sign In</Button>
      </Paper>
    </div>
  }
}

const mapStateToProps = state => ({
  isLogined: state.common.isLogined,
})
const mapDispatchToProps = {
  setLogin,
}
export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn))