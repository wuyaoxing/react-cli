import Loadable from 'react-loadable'
import Loading from 'components/loading'

const AsyncComponent = loadModule =>
    Loadable({
        loader: loadModule,
        loading: Loading
    })

export const navRoutes = [
    {
        name: 'button',
        path: '/button',
        field: 'button',
        component: AsyncComponent(() => import(/* webpackChunkName: "button" */ 'components/antd/Button'))
    },
    {
        name: 'checkout',
        path: '/checkout',
        field: 'checkout',
        component: AsyncComponent(() => import(/* webpackChunkName: "checkbox" */ 'components/antd/Checkbox'))
    },
    {
        name: 'input',
        path: '/input',
        field: 'input',
        component: AsyncComponent(() => import(/* webpackChunkName: "input" */ 'components/antd/Input'))
    }
]
