import React, { Component } from 'react'
import SummaryStore from '../stores/SummaryStore.js'

class Summary extends Component {
  constructor(props) {
    super(props)
    // this绑定
    this.onUpdate = this.onUpdate.bind(this)
    // 初始化state
    this.state = {
      sum: SummaryStore.getSummary()
    }
  }

  // 添加事件监听
  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate)
  }

  // 移除事件监听
  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onUpdate)
  }

  // store变化触发，更新state
  onUpdate() {
    this.setState({
      sum: SummaryStore.getSummary()
    })
  }

  render() {
    return (
      <div>Total: {this.state.sum}</div>
    )
  }
}

export default Summary