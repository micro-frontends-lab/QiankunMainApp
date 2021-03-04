// @micro example: 设置微前端应用的侧边栏菜单
// 请根据子应用模块拆分情况进行配置
// 如果菜单项中定义了routeName字段，将自动从路由中查找path、auth等字段填充，避免手动重复填写。
export default {
    title: '微前端示例',
    header: 'home',
    icon: 'md-git-network',
    path: '',
    children: [{
        routeName: 'ExampleMultition',
        header: 'home',
        icon: 'md-git-network'
    },
    {
        routeName: 'ExampleSingleton',
        header: 'home',
        icon: 'md-git-branch'
    },
    {
        routeName: 'ExampleAnotherSingleton',
        header: 'home',
        icon: 'md-git-branch'
    }]
}
