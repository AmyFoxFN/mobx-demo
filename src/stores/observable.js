import { observable, autorun } from 'mobx'

class Store {
  @observable obj = {
    a: 0
  }
  @observable.ref objRef = {
    a: 0
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
