import PropTypes from 'prop-types'
import React from 'react'

import ErrorPage from './errorPage'

const UnknownErrorPage = ({ message, onLogout }) => (
  <ErrorPage header='Error'>
    <p>
      An unknown error has occurred.&nbsp;
      Please try <a href=''>refreshing the page</a>{' '}
      or <a href='/' onClick={onLogout}>logging out</a>.
    </p>
    <div
      style={{
        marginTop: '50px',
        opacity: 0.5,
      }}
    >
      <b>Technical Details: </b>{message}
    </div>
  </ErrorPage>
)

UnknownErrorPage.propTypes = {
  message: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
}

export default UnknownErrorPage
