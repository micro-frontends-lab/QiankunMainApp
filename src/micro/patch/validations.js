import microApps from './apps'

function findApp (appName = '') {
    return microApps.apps.find((app) => app.name === appName)
}

function mustBeRegisteredApp (appName = '', message = '') {
    let app = findApp(appName)
    if (!app) {
        throw new Error(`Invalid app! ${message}`)
    }
}

export {
    mustBeRegisteredApp
}
