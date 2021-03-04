// 提供更便捷的设置菜单数据的方法，可通过路由名称查找fullPath，避免反复手动设置菜单路径。

import { findByName } from './route'

function setAttrs (menuItems = [], routes = []) {
    menuItems.forEach((item) => {
        if (item.routeName) {
            let route = findByName(routes, item.routeName)
            item.path || (item.path = route.meta.fullPath)
            item.auth || (item.auth = route.meta.auth)
            item.title || (item.title = route.meta.title)
        }
        item.children && setAttrs(item.children, routes)
    })
    return menuItems
}

export {
    setAttrs
}
