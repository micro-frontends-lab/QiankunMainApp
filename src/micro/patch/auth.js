// @micro example
function authCheck (options = {}) {
    let path = options.route.path
    return Promise.resolve(true)
}

export { authCheck }
