import React, { Component } from 'react'
import propTypes from 'prop-types'
class Counter extends Component {

  constructor(props) {
    super(props)

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

    this.state = {
      count: props.initValue,
    }
  }
  onClickIncrementButton() {
    this.setState({
      count: this.state.count + 1
    })
  }
  onClickDecrementButton() {
    this.setState({
      count: this.state.count - 1
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

Counter.defaultProps = {
  initValue: 0
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
  initValue: propTypes.number,
}

export default Counter