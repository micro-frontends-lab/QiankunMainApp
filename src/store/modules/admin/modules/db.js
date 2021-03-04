/**
 * 持久化存储
 * 一般情况下，您无需修改此文件
 * */

/**
 * @micro 现在是二般情况，为了避免应用之间localstorage存储空间冲突，必须得改。
 * */

import router from '@/router'
import { dbFactory } from '@/micro/patch/store'

let { pathInit, module } = dbFactory('database', router)

export {
    pathInit,
    module as default
}
