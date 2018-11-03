import React from 'react'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import {updatePageCAsync} from 'Store/actionCreators'

import RouteComponent from '../components/RouteComponent'



class Home extends RouteComponent {

  updateContent = () => {
    let content = 'update at: ' + new Date().toLocaleString()
    this.props.updatePageCAsync(content)
  }
  render() {
    return <div>
      <h3>Page C <Button onClick={this.updateContent}>update</Button></h3>
      <p>{this.props.content}</p>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    content: state.pageC.content
  }
}

const mapDispatchToProps = {
  updatePageCAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

