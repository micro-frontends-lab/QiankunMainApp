function print (msg, style) {
    if (typeof msg === 'string') {
        return console.log(`%c${msg}`, style);
    }
    return console.log(msg);
}

function factory (style, label = '') {
    return function() {
        let time = Date.now()
        print(`\n\n\n${label}LOG ${time} BEGIN`, style.label)
        Array.from(arguments).forEach(function(arg) {
            print(arg, style.info)
        })
        print(`${label}LOG ${time} END\n\n\n`, style.label)
    }
}

const log = factory({
    label: 'color:#f8427f;font-weight:bold',
    info: 'color:#383838;font-weight:bold'
}, 'MICRO MAIN ')

const childLog = factory({
    label: 'color:#0085ff;font-weight:bold',
    info: 'color:#383838;font-weight:bold'
}, 'MICRO CHILD ')

export {
    log,
    childLog,
    log as default
}
