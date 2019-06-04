import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class Basic extends React.Component {
  render () {
    return (
      <div>
        basic [count]: {this.props.store.count}
      </div>
    )
  }
}