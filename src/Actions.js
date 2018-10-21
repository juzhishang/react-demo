import * as ActionTypes from './ActionTypes.js'

// actions方法
export const increment = (counterCaption) => {
  return ({
    type: ActionTypes.INCREMENT,
    counterCaption,
  })
}

export const decrement = (counterCaption) => {
  return ({
    type: ActionTypes.DECREMENT,
    counterCaption,
  })
}