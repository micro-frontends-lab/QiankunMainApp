import micro from '@/libs/micro-core'
import { name } from '../../../package.json'
import children from '../children'
import modules from '../modules'
import env from './env'
import log from './log'

let microApps = micro({ name, env }).children(...children).modules(...modules)

log(`${name} is started under ${env} mode.`, 'Micro instance:', microApps)

window.addEventListener('single-spa:before-routing-event', function () {
    log(`${name} matching child applications:`, microApps.matchingApps())
})

export default microApps
