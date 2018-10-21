import React, { Component } from 'react'
import propTypes from 'prop-types'
import store from '../Store.js'

import * as Actions from '../Actions'


class Counter extends Component {

  constructor(props) {
    super(props)

    // this绑定
    this.onChange = this.onChange.bind(this)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

    this.state = this.getOwnState()
  }

  // 防止不必要的渲染
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  // 点击时派发action
  onClickIncrementButton() {
    store.dispatch(Actions.increment(this.props.caption))
  }
  onClickDecrementButton() {
    store.dispatch(Actions.decrement(this.props.caption))
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }

  // 添加事件监听
  componentDidMount() {
    store.subscribe(this.onChange)
  }
// 解除事件监听
  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  // 只要store变化就会触发onChange事件
  onChange() {
    this.setState(this.getOwnState())
  }

  render() {
    const value = this.state.value
    const {caption} = this.props
    const buttonStyle = {
      color: '#666',
      margin: '0 5px',
    }

    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
}

export default Counter