import React, { Component } from 'react'
import { render } from 'react-dom'

import Page from './components/Page.jsx'
import './assets/css/index.styl'

console.log('当前环境：' + process.env.NODE_ENV)

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Page />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))