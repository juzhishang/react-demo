import React, { Component } from 'react'
import propTypes from 'prop-types'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../Actions'


class Counter extends Component {

  constructor(props) {
    super(props)

    // this绑定
    this.onChange = this.onChange.bind(this)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

    // state初始化，数据从store中取
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
  }

  // 防止不必要的渲染
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  // 点击时派发action
  onClickIncrementButton() {
    Actions.increment(this.props.caption)
  }
  onClickDecrementButton() {
    Actions.decrement(this.props.caption)
  }

  // 添加事件监听
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }
// 解除事件监听
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  // 只要store变化就会触发onChange事件
  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption]
    this.setState({
      count: newCount
    })
  }

  render() {
    const { caption } = this.props
    const buttonStyle = {
      color: '#666',
      margin: '0 5px',
    }

    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
}

export default Counter