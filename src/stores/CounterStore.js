import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import {EventEmitter} from 'events'

// 初始store
const counterValues = {
  First: 0,
  Second: 10,
  Third: 20,
}

const CHANGE_EVENT = 'changed'

// 让store成为EventEmitter对象
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  // 可以通过此方法获取store
  getCounterValues: function() {
    return counterValues
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

// 把CounterStore注册到Dispatcher上，入参是一个回调，
// 所有派发给Dispatcher的action对象，都会传递到这个回调函数中
// 返回的token用于Store之间的同步
CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++
    CounterStore.emitChange()
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --
    CounterStore.emitChange()
  }
})

export default CounterStore