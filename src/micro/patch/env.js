/**
* 请确保主应用项目根目录下 .env.production 和 .env.slave_dev 包含以下内容
*
* .env.production 需包含
* VUE_APP_CHILD_DEVELOPMENT=false
*
* .env.child_development 需包含
* NODE_ENV=production
* VUE_APP_CHILD_DEVELOPMENT=false
*/

let env = process.env.NODE_ENV
if (process.env.VUE_APP_CHILD_DEVELOPMENT === 'true') {
    env = 'child_development'
}

export default env
