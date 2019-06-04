import * as React from 'react'
import { Provider } from 'mobx-react'
import store from './stores/basic'
import CompBasic from './components/basic'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          react app
          <CompBasic/>
          {/* <CompBasic store={store}/> */}
        </div>
      </Provider>
    )
  }
}
