/**
 * ast转obj
 */
const compiler = require('./compiler')

function astToObj(ast) {
    const obj = {}
    const children = ast.children
    compiler(obj, children)

    return obj
}

module.exports = astToObj