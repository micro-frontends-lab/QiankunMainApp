import microMessenger from '@/libs/micro-messenger'
import router from '@/router'
import microApps from './patch/apps'
import log from './patch/log'

let messenger = microMessenger(microApps.main.name)

// @micro example: 添加消息监听
// 全局监听在此添加，模块内监听请import此messenger后在对应模块文件内添加监听。
microApps.apps.forEach((app) => {
    // 监听子应用需要跳转至403页面的消息通知。
    messenger.on(`${app.name}:403`, () => {
        router.replace({ name: '403' })
    })
})

log(`${microApps.main.name} messenger event listeners:`, messenger.events)

export default messenger
