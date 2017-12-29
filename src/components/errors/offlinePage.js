import React from 'react'

import ErrorPage from './errorPage'

export default class OfflinePage extends React.Component {
  componentDidMount () {
    setTimeout(() => { window.location.reload() }, 30000)
  }

  render () {
    return (
      <ErrorPage header='You’re Offline'>
        <p>
          Looks like there’s some trouble with the internet connection.
        </p>
      </ErrorPage>
    )
  }
}
