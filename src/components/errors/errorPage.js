import PropTypes from 'prop-types'
import React from 'react'

export default class ErrorPage extends React.PureComponent {
  static propTypes = {
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }

  render () {
    return (
      <div>
        <div className='tw-error-page'>
          <div className='tw-error-page__message-header'>
            {this.props.header}
          </div>
          <div className='tw-error-page__message'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
