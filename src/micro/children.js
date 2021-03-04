// @micro example: 注册子应用
// 请根据子应用拆分情况进行配置

// 如果使用单个nginx分目录部署的方案，有两个地方需要注意：
// 1. remote路径不要和子应用name使用同样的名称。
// 因为浏览器刷新的时候地址栏里实际上是Vue路由路径， 如果remote路径和当前浏览器地址栏径相同，
// 那么nginx会根据try_files配置自动尝试返回当前路径下的index.html文件，而不是服务根目录下的
// index.html, 造成应用入口index.html错误的问题。
// 2. remote路径要写全html文件路径。
// 因为nginx在文件查找及proxy_pass的过程中，根据conf文件配置情况，可能会发生在uri结尾添加/的
// 301重定向，会造成主应用通过异步请求获取子应用资源时无法自动处理重定向的问题。
module.exports = [
    {
        name: 'QiankunChildAppOne',
        entry: {
            local: 'http://localhost:8081',
            remote: '/QiankunChildAppOne/index.html'
        }
    },
    {
        name: 'QiankunChildAppTwo',
        entry: {
            local: 'http://localhost:8082',
            remote: '/QiankunChildAppTwo/index.html'
        }
    }
]
