import { observable, autorun, reaction, observe } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

autorun(function autorunEffectXXX () {
  console.log('autorun [count]:', store.count)
})

reaction(function reactionExpressionXXX () {
  // console.log('reaction expression [count]', store.count)
  return store.count
} , function reactionEffectXXX() {
  console.log('reaction [count]:', store.count)
})

observe(store, 'count', function observeEffectXXX({ newValue, oldValue }) {
  console.log('observe [count]:', oldValue, '->', newValue)
})

store.count++
