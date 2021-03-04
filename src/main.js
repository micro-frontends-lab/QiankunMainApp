// Vue
import Vue from 'vue'
import ViewUI from 'view-design'
import ViewUIPro from '@/libs/iview-pro/iview-pro.min.js'

// 使用样式，修改主题可以在 styles 目录下创建新的主题包并修改 iView 默认的 less 变量
// 参考 https://www.iviewui.com/docs/guide/theme
import './styles/index.less'
import './libs/iview-pro/iview-pro.css'

import plugins from '@/plugins'
import { getHeaderName, getMenuSider, getSiderSubmenu } from '@/libs/system'
import iLink from '@/components/link'

import App from './App';
import Setting from './setting'
import store from '@/store/index'
import router from './router'
import { frameInRoutes } from '@/router/routes'
import menuHeader from '@/menu/header'
import menuSider from '@/menu/sider'
import i18n from '@/i18n'
import mixinApp from '@/mixins/app'

Vue.use(ViewUI, {
    i18n: (key, value) => i18n.t(key, value)
})
Vue.use(ViewUIPro)
Vue.use(plugins)
Vue.component('i-link', iLink)

if (window) window.$t = (key, value) => i18n.t(key, value)

new Vue({
    store,
    router,
    i18n,
    mixins: [mixinApp],
    render: h => h(App),
    created () {
        // 处理路由 得到每一级的路由设置
        this.$store.commit('admin/page/init', frameInRoutes)
        // 设置顶栏菜单
        this.$store.commit('admin/menu/setHeader', menuHeader)
        // 加载用户登录的数据
        this.$store.dispatch('admin/account/load')
        // 初始化全屏监听
        this.$store.dispatch('admin/layout/listenFullscreen')
    },
    watch: {
        // 监听路由 控制侧边栏显示 标记当前顶栏菜单（如需要）
        '$route': {
            immediate: true, // 修复ivew侧边栏菜单在页面初始化时不显示的问题
            handler (to, from) {
                const path = to.path
                if (!Setting.dynamicSiderMenu) {
                    const headerName = getHeaderName(path, menuSider)
                    // 在 404 时，是没有 headerName 的
                    if (headerName !== null) {
                        this.$store.commit('admin/menu/setHeaderName', headerName)
                        const filterMenuSider = getMenuSider(menuSider, headerName)
                        this.$store.commit('admin/menu/setSider', filterMenuSider)
                        this.$store.commit('admin/menu/setActivePath', path)
                        const openNames = getSiderSubmenu(path, menuSider)
                        this.$store.commit('admin/menu/setOpenNames', openNames)
                    }
                }
                this.appRouteChange(to, from)
            }
        }
    }
}).$mount('#app')

import microApps from '@/micro' // @micro 引入MicroInstance
microApps.register().start() // @micro 启动子应用(默认开启缓存模式)
// microApps.register({cachable: false}).start() // @micro 启动子应用并禁用缓存模式
