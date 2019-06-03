import { observable, autorun } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

autorun(() => {
  console.log('autorun when count change:', store.count)
})

store.count++
