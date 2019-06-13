import { observable, autorun, reaction, observe } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

autorun(function autorunEffectXXX () {
  console.log('autorun [count]:', store.count)
})

reaction(function reactionExpressionXXX () {
  return store.count
} , function reactionEffectXXX() {
  console.log('reaction [count]:', store.count)
})

/* use reaction effect data. */
// reaction(function reactionExpressionXXX2 () {
//   return store.count
// } , function reactionEffectXXX2(data) {
//   console.log('reaction2 [count]:', data)
// })

observe(store, 'count', function observeEffectXXX({ newValue, oldValue }) {
  console.log('observe [count]:', oldValue, '->', newValue)
})

store.count++
