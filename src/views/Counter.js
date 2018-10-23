import React from 'react'
import propTypes from 'prop-types'

import * as Actions from '../Actions'
// 用来连接“容器组件”和“渲染组件”
import {connect} from 'react-redux'

const buttonStyle = {
  color: '#666',
  margin: '0 5px',
}

function Counter ({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  )
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
  onIncrement: propTypes.func.isRequired,
  onDecrement: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
}


function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}


// connect接收两个参数，mapStateToProps与mapDispatchToProps，返回的结果仍旧是一个函数
// 对这个函数传入Counter渲染组件，最后返回的是容器组件，相当于之前的CounterContainer组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter)