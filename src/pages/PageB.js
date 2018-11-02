import React from 'react';
import axios from 'Plugins/axios'
import RouteComponent from '../components/RouteComponent'

export default class PageB extends RouteComponent {
  state = {}
  asyncData = async (props) => {
    const {result: userInfo} = await axios.get('http://45.62.111.182:3389/mock/cms/userinfo')
    return {
      userInfo
    }
  }
  // UNSAFE_componentWillMount() {
  //   console.log('被覆盖了')
  // }
  render() {
    return this.isAsyncFinished() && (<div>
        <h3>PageB</h3>
        <p>Hello {this.state.userInfo.name}! welcome~~</p>
      </div>)
  }
}