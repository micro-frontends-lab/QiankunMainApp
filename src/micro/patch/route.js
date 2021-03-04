import Setting from '../../setting'
import microApps from './apps'

// 提供通过路由名称查找路由的方法，便于查找路由数据。
function findByName (routes = [], name = '') {
    let findedRoute = null
    routes.some((route) => {
        if (route.name === name) {
            findedRoute = route
            return true
        }
        if (route.children) {
            findedRoute = findByName(route.children, name)
            return !!findedRoute
        }
    })
    return findedRoute
}

// 对路由meta数据进行扩充，暂时只扩充了fullPath，可视情况扩充其它数据。
function setMetaAttrs (routes = [], opts = { pathPrefix: '' }) {
    routes.forEach((route) => {
        route.meta || (route.meta = {})
        route.meta.fullPath || (route.meta.fullPath = `${opts.pathPrefix}${route.meta.pathSegment || route.path}`)
        route.children && setMetaAttrs(route.children, { pathPrefix: route.meta.fullPath })
    })
    return routes
}

// 通过子应用的模块数据生成vue路由数据，避免人工手动设置路由的繁琐，通常在路由设置中调用此方法。
function createFromMicroModule (module = {}, component = {}, isInFrame = true) {
    let path = isInFrame && module.path.startsWith('/') ? module.path.slice(1) : module.path
    path = path.endsWith('/') ? path.slice(0, path.length - 1) : path
    // vue的路由配置会自定添加前缀，为了避免手动在vue路由配置中删除子应用模块路径中的前缀
    // 在此处进行处理
    path = removePrefix(path)
    return {
        path: `${path}/:sub_path?`,
        name: module.name,
        component,
        meta: {
            title: module.title,
            apps: module.apps,
            auth: module.auth,
            pathSegment: path
        }
    }
}

// 提供一个可以动态设置路由数据的方法，方便对路由数据进行修改。
function setAttr (routes = [], name = '', attr = {}) {
    let route = findByName(routes, name)
    route && Object.assign(route, attr)
    return route
}

function createMicroRoutes () {
    let singletonRoutes = (() => { // 从micro modules创建单例路由
        return microApps.findModules('*', 'singleton').map((module) => {
            let component = () => import('@/micro/patch/MicroApp')
            return createFromMicroModule(module, component)
        })
    })()

    let multitionRoutes = (() => { // 从micro modules创建多例路由
        return microApps.findModules('*', 'multition').map((module) => {
            let component = () => import('@/pages/micro/' + module.name)
            return createFromMicroModule(module, component)
        })
    })()

    return singletonRoutes.concat(multitionRoutes)
}

function prefixWithoutSlash () {
    return Setting.routerBase.replace(/^\//, '')
}

// 添加此方法的目的是为了方便在路由path上添加prefix
function addPrefix (path = '') {
   return `/${prefixWithoutSlash()}${path[0] === '/' ? '' : '/'}${path}`
}

// 添加此方法的目的是为了方便在路由path上移除prefix
function removePrefix (path = '', removeLeadingSlash = true) {
    let pattern = `\^\/?${prefixWithoutSlash()}`
    pattern = removeLeadingSlash ? `${pattern}\\/` : pattern
    return path.replace(new RegExp(pattern), '')
}



export {
    findByName,
    setMetaAttrs,
    createFromMicroModule,
    setAttr,
    createMicroRoutes,
    addPrefix,
    removePrefix
}
