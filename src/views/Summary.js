import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'


function Summary ({value}) {
  return (
    <div>Total Count: {value}</div>
  )
}

Summary.propTypes = {
  value: propTypes.number.isRequired
}

function mapStateToProps(state) {
  let sum = 0
  for(const key in state) {
    if(state.hasOwnProperty(key)) {
      sum += state[key]
    }
  }
  return {value: sum}
}

export default connect(mapStateToProps)(Summary)