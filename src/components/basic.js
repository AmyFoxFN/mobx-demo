import * as React from 'react'
import { inject, observer } from 'mobx-react'

/* inject is necessary for context */
@inject('store')
/* observer is for observing state update and re-render */
@observer
export default class Basic extends React.Component {
  render () {
    return (
      <div>
        basic component [count]: {this.props.store.count}
      </div>
    )
  }
}