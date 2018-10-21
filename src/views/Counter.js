import React, { Component } from 'react'
import propTypes from 'prop-types'
import store from '../Store.js'

import * as Actions from '../Actions'


class Counter extends Component {
  render() {
    const {caption, onIncrement, onDecrement, value} = this.props
    const buttonStyle = {
      color: '#666',
      margin: '0 5px',
    }

    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
  onIncrement: propTypes.func.isRequired,
  onDecrement: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
}

class CounterContainer extends Component {

  constructor(props) {
    super(props)

    // this绑定
    this.onChange = this.onChange.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.getOwnState = this.getOwnState.bind(this)

    this.state = this.getOwnState()
  }

  // 防止不必要的渲染
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.value !== this.state.value)
  }

  // 点击时派发action
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption))
  }
  onDecrement() {
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
    return (
      <Counter caption = {this.props.caption} 
        onIncrement={this.onIncrement} 
        onDecrement={this.onDecrement} 
        value={this.state.value} />
    )
  }
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
}

export default CounterContainer