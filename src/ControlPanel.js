import React, { Component } from 'react'
import Counter from './Counter'
class ControlPanel extends Component {
  constructor(props) {
    super(props)
    console.log(`1) constructor`)
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

  render() {
    console.log(`3) render`)
    return (
      <div>
        <Counter caption="First" initValue={0}/>
        <Counter caption="Second" initValue={10}/>
        <Counter caption="Third" initValue={20}/>
        <button onClick = { () => this.forceUpdate() }>click me to repaint!</button>
      </div>
    )
  }
}

export default ControlPanel