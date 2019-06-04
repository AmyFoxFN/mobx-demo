import { observable, autorun } from 'mobx'

class Store {
  @observable count = 0
  @observable obj = {
    a: 1
  }
  @observable.ref objRef = {
    a: 1
  }
}

const store = new Store()

autorun(() => {
  console.log('autorun [obj.a]:', store.obj.a)
})

autorun(() => {
  console.log('autorun [objRef.a]:', store.objRef.a)
})

store.obj.a++
store.objRef.a++
