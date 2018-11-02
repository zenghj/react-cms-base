import React from 'react';
import {connect} from 'react-redux'

import {setPageAlist} from 'Store/actionCreators'
import axios from 'Plugins/axios';
import withAsyncData from 'Components/WithAsyncData'

const fetchAsyncData = async () => {
  const data = await axios.get('http://45.62.111.182:3389/mock/cms/channelList')
  const list = data.result.list
  return {list}
}
class PageA extends React.Component {

  render() {
    console.log(this)
    const {list} = this.props.asyncData
    return <div>
      <h3>PageA</h3>
      <code>
        {JSON.stringify(list, 4)}
      </code>
    </div>
  }
}

const mapStateToProps = state => ({
  list: state.pageA.list
})
const mapDispatchToProps = {
  setPageAlist
}
export default withAsyncData(fetchAsyncData)(connect(mapStateToProps, mapDispatchToProps)(PageA)) 