import React from 'react'

import ErrorPage from './errorPage'

class Error404Page extends React.Component {
  constructor(props) {
    super(props)
  }

  onClickContactUs = e => {
    console.log(e.target, this)
  }

  render () {
    return (
      <ErrorPage header='404'>
          <div onClick={this.onClickContactUs}>404</div>
      </ErrorPage>
    )
  }
}

export default Error404Page
