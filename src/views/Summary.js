import React, { Component} from 'react'
import propTypes from 'prop-types'


class Summary extends Component {
  render() {
    return (
      <div>Total Count: {this.props.sum}</div>
    )
  }
}

Summary.propTypes = {
  sum: propTypes.number.isRequired
}

class SummaryContainer extends Component {
  constructor(props, context) {
    super(props, context)
    // this绑定
    this.onUpdate = this.onUpdate.bind(this)
    // 初始化state
    this.state = this.getOwnState()
  }

  getOwnState() {
    const state = this.context.store.getState()
    let sum = 0
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return { sum }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum
  }

  // 添加事件监听
  componentDidMount() {
    this.context.store.subscribe(this.onUpdate)
  }

  // 移除事件监听
  componentWillUnmount() {
    this.context.store.unsubscribe(this.onUpdate)
  }

  // store变化触发，更新state
  onUpdate() {
    this.setState(this.getOwnState())
  }

  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    )
  }
}

SummaryContainer.contextTypes = {
  store: propTypes.object
}

export default SummaryContainer