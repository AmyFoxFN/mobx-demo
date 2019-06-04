import * as React from 'react'
import { Provider } from 'mobx-react'
import store from './stores/react'
import CompBasic from './components/basic'

export default class App extends React.Component {
  add = () => {
    store.add()
  }

  sub = () => {
    store.sub()
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          React App
          <CompBasic/>
          {/* <CompBasic store={store}/> */}

          <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
          </div>
        </div>
      </Provider>
    )
  }
}
