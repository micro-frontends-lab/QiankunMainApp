import routes from '@/router/routes'
import { setAttrs } from '@/micro/patch/menu'

// 如果菜单项中定义了routeName字段，自动从路由中查找path、auth等字段填充，避免手动重复填写。
export default setAttrs([
    {
        path: '/',
        title: '首页',
        icon: 'md-home',
        hideSider: false,
        name: 'home'
    },
    {
        path: '/log',
        title: '日志',
        icon: 'md-locate',
        hideSider: true,
        name: 'system'
    }
], routes)
