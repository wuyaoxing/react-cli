import './less/index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'
import registerServiceWorker from './registerServiceWorker'

import FastClick from 'fastclick'

FastClick.attach(document.body)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
