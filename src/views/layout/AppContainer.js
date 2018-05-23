import './AppContainer.less'

import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'

import { navRoutes } from 'router/routes'

const { Header, Sider, Content } = Layout

import * as Antd from 'components/antd'

export default class AppContainer extends React.Component {
    state = {
        collapsed: false
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    renderNavLink = nav => (<Link to={nav.path}>{nav.name}</Link>)

    render() {
        return (
            <Layout className="app-layout">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">
                        <Link to="/">logo</Link>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                    >
                        {navRoutes.map(item => (
                            <Menu.Item key={item.field}>
                                {/* <span>{item.name}</span> */}
                                {this.renderNavLink(item)}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={
                                this.state.collapsed
                                    ? 'menu-unfold'
                                    : 'menu-fold'
                            }
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280
                        }}
                    >
                        <Route exact path="/" component={Antd.Antd} />
                        <Route path="/button" component={Antd.ButtonComponent} />
                        <Route path="/checkout" component={Antd.CheckoutComponent} />
                        <Route path="/input" component={Antd.InputComponent} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
