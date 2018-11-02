import React from 'react';
import {connect} from 'react-redux'

import {setPageAlist} from 'Store/actionCreators'
import axios from 'Plugins/axios';
import RouteComponent from 'Components/RouteComponent';

class PageA extends RouteComponent {
  asyncData = async (props) => {
    const data = await axios.get('http://45.62.111.182:3389/mock/cms/channelList')
    const list = data.result.list
    props.setPageAlist(list)
  }
  asyncRender() {
    return <div>
      <h3>PageA</h3>
      <code>
        {JSON.stringify(this.props.list, 4)}
      </code>
    </div>
  }
  // render() {
  //   return 
  // }
}

const mapStateToProps = state => ({
  list: state.pageA.list
})
const mapDispatchToProps = {
  setPageAlist
}
export default connect(mapStateToProps, mapDispatchToProps)(PageA)