import * as React from 'react'
import * as ReactDOM from 'react-dom'

// import './stores/basic'
import './stores/observable'
// import './style.less'
// import store from './store'

class App extends React.Component {
  render () {
    return (
      <div>
        react app
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)