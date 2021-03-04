import axios from 'axios'
import lodash from 'lodash'
import messenger from '@/libs/micro-messenger'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import ViewUI from 'view-design'
import ViewUIPro from '@/libs/iview-pro/iview-pro.min.js'
import iLink from '@/components/link'
import mde from '@/components/mde'
import quill from '@/components/quill'
import util from '@/libs/util'
import plugins from '@/plugins'
import request from '@/plugins/request'
import { authCheck } from './patch/auth'
import store from '@/store'
import { dbFactory, register as registerStore, unregister as unregisterStore } from './patch/store'
import i18n from '@/i18n'
import { register as registerI18n, unregister as unregisterI18n } from './patch/i18n'
import microApps from './patch/apps'
import { log, childLog } from './patch/log'
import {addPrefix, removePrefix} from './patch/route'
import Setting from '../setting'

// @micro example
// 主应用开发模式下，主应用通过访问本地localhost加载，默认从远程服务加载部署的子应用。
// 子应用开发模式下，主应用通过访问远程部署地址加载，默认从localhost加载本地子应用。
let devFetchingMode = {

    // 修改子应用加载源为远程, 仅开发模式下有效。
    // @param {Object} options
    // @param {string | Array} options.except  - 子应用名称或名称数组。除了包含的子应用，其它子应用均从远程服务加载。
    // @param {string | Array} options.only    - 子应用名称或名称数组。只有包含的子应用从远程服务加载。
    // @returns {undefined}
    // @example
    // 为不影响其他人的设置，请不要在代码层面调用，仅在控制台中调用即可。
    // _fetchChildren.remotely()                        // 所有子应用都从远程加载。
    // _fetchChildren.remotely({except: 'MicroChild'})  // 本地加载MicroChild，远程加载其它子应用。
    // _fetchChildren.remotely({only: 'MicroChild'})    // 远程加载MicroChild，本地加载其它子应用。
    remotely (options) {
        microApps.fetchRemotely(options)
    },

    // 修改子应用加载源为本地，仅开发模式下有效。
    // @param {Object} options
    // @param {string | Array} options.except  - 子应用名称或名称数组。除了包含的子应用，其它子应用均从本地加载。
    // @param {string | Array} options.only    - 子应用名称或名称数组。只有包含的子应用从本地加载。
    // @returns {undefined}
    // @example
    // 为不影响其他人的设置，请不要在代码层面调用，仅在控制台中调用即可。
    // _fetchChildren.locally()                        // 所有子应用都从本地加载。
    // _fetchChildren.locally({except: 'MicroChild'})  // 远程加载MicroChild，本地加载其它子应用。
    // _fetchChildren.locally({only: 'MicroChild'})    // 本地加载MicroChild，远程加载其它子应用。
    locally (options) {
        microApps.fetchLocally(options)
    },

    // 重置子应用加载源为默认状态。
    byDefault () {
        microApps.resetFetchingMode()
    }
}

microApps.share('_fetchChildren', devFetchingMode)
Object.freeze(devFetchingMode)

// @micro example 将需要共享给子应用的对象在shared中定义。
// 子应用可通过window下的主应用名变量访问到shared对象，
// 或配置子应用webpack externals，通过import直接访问到shared对象下挂载的对象。
let shared = {
    axios,
    lodash,
    messenger,
    Vue,
    VueRouter,
    Vuex,
    VueI18n,
    ViewUI,
    ViewUIPro,
    components: {
        iLink,
        mde,
        quill
    },
    util,
    plugins,
    request,
    store: {
        dbFactory,
        main: store,
        register: registerStore,
        unregister: unregisterStore
    },
    auth: {
        check: authCheck
    },
    i18n: {
        i18n,
        register: registerI18n,
        unregister: unregisterI18n
    },
    log: childLog,
    routePrefix: {
        VALUE: Setting.routerBase,
        add: addPrefix,
        remove: removePrefix
    }
}

microApps.share(microApps.main.name, shared)

log(`${microApps.main.name} shared properties:`, shared)

export default Object.freeze(shared)
