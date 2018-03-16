import React, { Component } from 'react'
import moment from 'moment'

moment.locale('zh-cn', {
  meridiem(hour, minute, isLowercase) {
    if (hour < 5) {
      return "凌晨"
    } else if (hour < 9) {
      return "上午"
    } else if (hour < 11 && minute < 30) {
      return "上午"
    } else if (hour < 13 && minute < 30) {
      return "中午"
    } else if (hour < 18) {
      return "下午"
    } else {
      return "晚上"
    }
  }
})

class Time extends Component {
  state = {
    now: ''
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        now: this.getNow()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  getNow() {
    return moment().format('YYYY-MM-DD HH:mm:ss')
  }
  render() {
    return (
      <div className="time">
        现在是：{this.state.now}
      </div>
    )
  }
}

export default Time