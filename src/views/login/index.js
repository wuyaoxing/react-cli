import React from 'react'
import { Redirect } from 'react-router-dom'

export default class LoginPage extends React.PureComponent {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        this.props.updateToken()
        this.setState({ redirectToReferrer: true })
    }

    render() {
        const { from } = this.props.location || {
            from: { pathname: '/' }
        }

        return this.state.redirectToReferrer ? (
            <Redirect to={from} />
        ) : (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}
