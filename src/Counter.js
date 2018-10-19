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

    console.log(`1 costructor ${this.props.caption}`)
  }

  componentWillMount() {
    console.log(`2 componentWillMount ${this.props.caption}`)
  }

  componentDidMount() {
    console.log(`4 componentDidMount ${this.props.caption}`)
  }

  componentWillReceiveProps() {
    console.log(`5 componentWillReceiveProps ${this.props.caption}`)
  }

  shouldComponentUpdate(nextP, nextS) {
    console.log(`6 shouldComponentUpdate ${this.props.caption}`)
    return (nextP.caption !== this.props.caption) ||
    (nextS.count !== this.state.count)
  }

  componentWillUpdate() {
    console.log(`7 componentWillUpdate ${this.props.caption}`)
  }

  componentDidUpdate() {
    console.log(`8 componentDidUpdate ${this.props.caption}`)
  }

  componentWillUnmount() {
    console.log(`9 componentWillUnmount ${this.props.caption}`)
  }

  onClickIncrementButton() {
    this.updateCount(true)
    // this.setState({
    //   count: this.state.count + 1
    // })
  }
  onClickDecrementButton() {
    this.updateCount(false)
    // this.setState({
    //   count: this.state.count - 1
    // })
  }

  updateCount(isIncrement) {
    const prevValue = this.state.count
    const newValue = isIncrement ? prevValue + 1 : prevValue - 1
    this.setState({
      count: newValue
    })
    this.props.onUpdate(newValue, prevValue)
  }

  render() {
    const { caption } = this.props
    const buttonStyle = {
      color: '#666',
      margin: '0 5px',
    }
    console.log(`3 render ${this.props.caption}`)
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
  initValue: 0,
  onUpdate: f => f
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
  initValue: propTypes.number,
  onUpdate: propTypes.func
}

export default Counter