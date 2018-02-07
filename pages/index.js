/* @flow */
import React, { Component } from 'react'
import { withReduxSaga } from '../store'
import Main from '../components/Main'

type Props = {}

class Index extends Component<Props> {
  render () {
    return <div>
      <Main />
    </div>
  }
}

export default withReduxSaga(Index)
