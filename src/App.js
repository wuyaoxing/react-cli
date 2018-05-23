import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { LocaleProvider } from 'antd'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

import AppContainer from 'views/layout/AppContainer'

class App extends Component {
    render () {
        return (
            <Router>
                <LocaleProvider locale={zhCN}>
                    <div className="app">
                        <AppContainer />
                    </div>
                </LocaleProvider>
            </Router>
        )
    }
}

export default App
