import React, { Component } from 'react'
import Counter from './Counter'
class ControlPanel extends Component {
  constructor(props) {
    super(props)
    console.log(`1) constructor`)

    this.onCounterUpdate = this.onCounterUpdate.bind(this)
    this.initValues = [0, 10, 20]
    const initSum = this.initValues.reduce((a, b) => a + b, 0)
    this.state = {
      sum: initSum
    }
  }

  onCounterUpdate(newValue, prevValue) {
    const valueChange = newValue - prevValue
    this.setState({
      sum: this.state.sum + valueChange
    })
  }

  componentWillMount() {
    console.log(`2) componentWillMount`)
  }

  componentDidMount() {
    console.log(`4) componentDidMount`)
  }

  componentWillReceiveProps() {
    console.log(`5) componentWillReceiveProps`)
  }

  shouldComponentUpdate(nextP, nextS) {
    console.log(`6) shouldComponentUpdate`)
    return true
  }

  componentWillUpdate() {
    console.log(`7) componentWillUpdate`)
  }

  componentDidUpdate() {
    console.log(`8) componentDidUpdate`)
  }

  componentWillUnmount() {
    console.log(`9) componentWillUnmount`)
  }

  render() {
    console.log(`3) render`)
    return (
      <div>
        <Counter caption="First" initValue={0} onUpdate={this.onCounterUpdate}/>
        <Counter caption="Second" initValue={10} onUpdate={this.onCounterUpdate}/>
        <Counter caption="Third" initValue={20} onUpdate={this.onCounterUpdate}/>
        <button onClick = { () => this.forceUpdate() }>click me to repaint!</button>
        <div>Total：{ this.state.sum }</div>
      </div>
    )
  }
}

export default ControlPanel