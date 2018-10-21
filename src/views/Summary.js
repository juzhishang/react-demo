import React, { Component } from 'react'
import store from '../Store.js'

class Summary extends Component {
  constructor(props) {
    super(props)
    // this绑定
    this.onUpdate = this.onUpdate.bind(this)
    // 初始化state
    this.state = this.getOwnState()
  }

  getOwnState() {
    const state = store.getState()
    let sum = 0
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return { sum }
  }
  // 添加事件监听
  componentDidMount() {
    store.subscribe(this.onUpdate)
  }

  // 移除事件监听
  componentWillUnmount() {
    store.unsubscribe(this.onUpdate)
  }

  // store变化触发，更新state
  onUpdate() {
    this.setState(this.getOwnState())
  }

  render() {
    return (
      <div>Total: {this.state.sum}</div>
    )
  }
}

export default Summary