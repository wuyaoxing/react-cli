import './AppContainer.less'

import React from 'react'
import { Route } from 'react-router-dom'

import { Layout, Icon } from 'antd'

import AppSider from './AppSider'

import { navRoutes } from 'router/routes'

import Antd from 'components/antd'

const { Header, Content } = Layout

export default class AppContainer extends React.Component {
    state = {
        collapsed: false
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Layout className="app-layout">
                <AppSider collapsed={this.state.collapsed} />
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
                        <Route exact path="/" component={Antd} />
                        {navRoutes.map(item => (
                            <Route
                                path={item.path}
                                component={item.component}
                                key={item.field}
                            />
                        ))}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
