// @micro
import routes from '@/router/routes'
import { setAttrs } from '@/micro/patch/menu'
import examples from './examples'

// 如果菜单项中定义了routeName字段，自动从路由中查找path、auth等字段填充，避免手动重复填写。
export default setAttrs([
    examples // @micro example: 引入配置的微前端应用侧边栏菜单
], routes)
