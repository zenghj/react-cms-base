import React from 'react';
import axios from 'Plugins/axios'
import withAsyncData from 'Components/WithAsyncData'
class PageA_1 extends React.Component {
  render() {
    const {userInfo} = this.props.asyncData
    return <div>
      <h3>PageA_1</h3>
      <p>name: {userInfo.name}</p>
      <p>role: {userInfo.role}</p>
    </div>
  }
}

const fetchAsyncData = async () => {
  const {result: userInfo} = await axios.get('http://45.62.111.182:3389/mock/cms/userinfo')
  return {userInfo}
}

export default withAsyncData(fetchAsyncData)(PageA_1)