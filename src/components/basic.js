import * as React from 'react'
import { inject, observer } from 'mobx-react'

/**
 * @tips
 * 1. '@inject' is necessary for context and has to come before '@observer'. If store is passed in as prop, ignore it.
 * 2. '@observer' is for observing state update and re-render.
 */
@inject('store')
@observer
export default class Basic extends React.Component {
  render () {
    return (
      <div>
        [count]: {this.props.store.count}
      </div>
    )
  }
}