import * as ActionTypes from './ActionTypes.js'
import AppDispatcher from './AppDispatcher.js'

// actions方法
export const increment = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption,
  })
}

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption,
  })
}