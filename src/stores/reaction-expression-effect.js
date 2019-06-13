import { observable, action, autorun, reaction } from 'mobx'

class Store {
  @observable count = 0
  @observable other = 0

  @action.bound
  setCountWithoutChange() {
    console.log('\n--- setCountWithoutChange ---')
    this.count = this.count
  }

  @action.bound
  changeCount() {
    console.log('\n--- changeCount ---')
    this.count++
  }

  @action.bound
  changeOther() {
    console.log('\n--- changeOther ---')
    this.other++
  }
}

const store = new Store()

reaction(() => {
  console.log('reaction expression')
  const getOther = store.other
  return store.count
}, () => {
  console.log('reaction effect')
})

autorun(() => {
  console.log('autorun')
  const getOther = store.other
  return store.count
})

store.setCountWithoutChange()
store.changeCount()
store.changeOther()
