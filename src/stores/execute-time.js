import { observable, autorun, reaction, observe } from 'mobx'

class Store {
  @observable count = 0
}

const store = new Store()

console.log('autorun start', +new Date())
autorun(() => {
  console.log('autorun - effect start', +new Date())
  const a = store.count
  console.log('autorun - effect end', +new Date())
})
console.log('autorun end', +new Date())

console.log('------------')

console.log('reaction start', +new Date())
reaction(() => store.count, () => {
  console.log('reaction - effect start', +new Date())
  const a = store.count
  console.log('reaction - effect end', +new Date())
})
console.log('reaction end', +new Date())

console.log('------------')

console.log('observe start', +new Date())
observe(store, 'count', ({ newValue, oldValue }) => {
  console.log('observe - effect start', +new Date())
  const a = store.count
  console.log('observe - effect end', +new Date())
})
console.log('observe end', +new Date())

console.log('------------')

console.log('set start', +new Date())
store.count++
console.log('set end', +new Date())
