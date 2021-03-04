import micro from '@/libs/micro-core'
import {addPrefix} from '@/micro/patch/route'

// @micro example: 注册子应用模块
// 请根据子应用拆分情况进行配置
export default [
    // 单例模块
    micro.singletonModules('QiankunChildAppOne', {
        name: 'ExampleSingleton',
        title: '子应用单例示例',
        path: addPrefix('/QiankunChildAppOne/ExampleSingleton')
    }),
    micro.singletonModules('QiankunChildAppTwo', {
        name: 'ExampleAnotherSingleton',
        title: '另一个子应用单例示例',
        path: addPrefix('/QiankunChildAppTwo/ExampleSingleton')
    }),
    // 多例模块
    micro.multitionModules(['QiankunChildAppOne', 'QiankunChildAppTwo'], {
        name: 'ExampleMultition',
        title: '子应用多例示例',
        path: addPrefix('/ExampleMultition')
    })
]
