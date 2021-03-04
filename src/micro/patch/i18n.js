// 提供子应用动态添加i8n设置的方法

import i18n from '@/i18n'
import { mustBeRegisteredApp } from './validations'
let merged = []

function register (appName = '', msgs = {}) {
    mustBeRegisteredApp(appName, 'I18n modules cannot be registered.')
    if (merged.includes(msgs)) { return }
    Object.keys(msgs).forEach((locale) => {
        let msg = {}
        msg[appName] = msgs[locale]
        i18n.mergeLocaleMessage(locale, msg)
    })
}

function unregister (appName = '', msgs = {}) {
    mustBeRegisteredApp(appName, 'I18n modules cannot be unregistered.')
}

export {
    register,
    unregister
}
