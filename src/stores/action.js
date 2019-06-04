import { observable, autorun, action } from 'mobx'

class Store {
  @observable count = 0

  @action.bound
  addCount() {
    this.count++
    this.count++
  }
}

const store = new Store()

autorun(() => {
  console.log('autorun [count]:', store.count)
})

store.count++
store.count++

store.addCount()
