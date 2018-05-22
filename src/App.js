import React, { Component } from 'react'
import { LocaleProvider } from 'antd'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

import Antd from 'components/antd'

class App extends Component {
    render () {
        return (
            <LocaleProvider locale={zhCN}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Antd />
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to
                        reload.
                    </p>
                </div>
            </LocaleProvider>
        )
    }
}

export default App
