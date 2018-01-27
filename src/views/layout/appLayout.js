import './layout.less'

import React from 'react'

import { Drawer, NavBar, List } from 'antd-mobile'

import { Icon } from '../../components'

const logo = require('../../assets/images/logo.png')

export default class AppLayout extends React.Component {
    state = {
        open: false
    }
    onOpenChange = (...args) => {
        console.log(args)
        this.setState({ open: !this.state.open })
    }
    render() {
        const NavLayout = (
            <List>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (i, index) => {
                        if (index === 0) {
                            return (
                                <List.Item
                                    key={index}
                                    thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                    multipleLine
                                >
                                    Category
                                </List.Item>
                            )
                        }
                        return (
                            <List.Item
                                key={index}
                                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                            >
                                Category{index}
                            </List.Item>
                        )
                    }
                )}
            </List>
        )
        return (
            <div className="app">
                <Drawer
                    className="app-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    touch={false}
                    enableDragHandle
                    contentStyle={{
                        color: '#A6A6A6',
                        textAlign: 'center'
                    }}
                    sidebar={NavLayout}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <NavBar
                        icon={<Icon name="bars" />}
                        onLeftClick={this.onOpenChange}
                    >
                        S.CRM
                    </NavBar>

                    <img src={logo} alt="" />
                    <p>Click upper-left corner</p>
                </Drawer>
            </div>
        )
    }
}
