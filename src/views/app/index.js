import React from 'react'

import LoginPage from '../login'
import { AppLayout } from '../layout'

export default class App extends React.Component {
    state = {
        isAuthenticated: false
    }

    fetchToken = () => {
        this.setState({ isAuthenticated: true })
    }

    updateToken = token => {
        this.setState({ isAuthenticated: true })
    }

    componentWillMount() {
        // this.fetchToken()
    }

    render() {
        return this.state.isAuthenticated ? <AppLayout /> : <LoginPage updateToken={this.updateToken}/>
    }
}
