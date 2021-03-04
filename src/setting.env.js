const { name } = require('../package.json')

const env = process.env.NODE_ENV;

// @micro
// @todo Add your host, for example: http://172.20.30.91:3333
const MICRO_REMOTE_HOST = 'https://micro-frontends-lab.github.io'

const Setting = {
    // 是否使用 Mock 的数据，默认 开发环境为 true，生产环境为 false
    isMock: env === 'development',
    // 部署应用包时的基本 URL
    publicPath: `/${name}/`,
    // 生产环境构建文件的目录名
    outputDir: `dist/${name}`,
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // @micro
    assetsDir: '',
    // 开发环境每次保存时 lint 代码，会将 lint 错误输出为编译警告
    // true || false || error
    lintOnSave: false,
    // iView Loader 的选项
    // 详见 https://www.iviewui.com/docs/guide/iview-loader
    iviewLoaderOptions: {
        prefix: false
    },
    // @micro
    proxyTable: env === 'development' ? Object.assign({
        // other proxy hosts here.
    }, (() => {
        let microRemoteProxy = {}
        require('./micro/children').forEach((chd) => {
            // can be modified according to your deployment situations.
            microRemoteProxy['/' + chd.entry.remote.split('/')[1]] = MICRO_REMOTE_HOST
        })
        return microRemoteProxy
    })()) : {}
};

module.exports = Setting;
