import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Fruits from './Fruits.jsx'
import Time from './Time.jsx'
import logo from '../assets/img/logo.jpg' 


class App extends React.Component {
  clickHandle1() {
    import('./es6_mod.js').then(obj => {
      console.log(obj.default)
    })
  }
  clickHandle2() {
    require.ensure([], () => {
      const obj = require('./commonjs_mod')
      console.log(obj)
    })
  }
  render() {
    return (
      <Router>
        <div className="page">
          <img onClick={this.clickHandle1} src={logo} width='100' />
          <h1 onClick={this.clickHandle2}>水果频道!</h1>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/apple'>苹果</Link>
            </li>
            <li>
              <Link to='/orange'>橙子</Link>          
            </li>
            <li>
              <Link to='/banana'>香蕉</Link>          
            </li>
          </ul>
    
          <Route path='/:id' component={Fruits} />
    
          <Time />
        </div>
      </Router>
    )
  }
}

export default App