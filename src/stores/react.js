import { observable, action } from 'mobx'

class Store {
  @observable count = 0

  @action.bound
  add () {
    this.count++
  }

  @action.bound
  sub () {
    this.count--
  }
}

const store = new Store()

export default store
