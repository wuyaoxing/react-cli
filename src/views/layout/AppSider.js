import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { navRoutes } from 'router/routes'

import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout

export default class AppSider extends React.Component {
    static propTypes = {
        collapsed: PropTypes.bool
    }

    renderNavLink = nav => (
        <Link to={nav.path}>
            <Icon type="mail" />
            <span>{nav.name}</span>
        </Link>
    )

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    <Link to="/">logo</Link>
                </div>
                <Menu theme="dark" mode="inline">
                    {navRoutes.map(item => (
                        <Menu.Item key={item.field}>
                            {this.renderNavLink(item)}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
        )
    }
}
