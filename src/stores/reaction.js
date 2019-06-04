import { observable, autorun, reaction, observe } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

autorun(() => {
  console.log('autorun [count]:', store.count)
})

reaction(() => store.count, () => {
  console.log('reaction [count]:', store.count)
})

observe(store, 'count', ({ newValue, oldValue }) => {
  console.log('observe [count]:', oldValue, '->', newValue)
})

store.count++
