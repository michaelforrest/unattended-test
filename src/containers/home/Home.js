import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component{
  render(){
    return (<div>
      <h1>Hello!</h1>
      <p>Hi.</p>
    </div>)
  }
}
export default connect(state => ({

}))(Home)
