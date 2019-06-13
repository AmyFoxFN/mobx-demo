import { observable, autorun } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

autorun(() => {
  console.log('autorun [count]:', store.count)
})

store.count++

console.log('Here is the sync code block after store.count++')
