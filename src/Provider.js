import { Component } from 'react'
import propTypes from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children
  }
}

Provider.propTypes = {
  store: propTypes.object.isRequired
}

Provider.childContextTypes = {
  store: propTypes.object
}

export default Provider