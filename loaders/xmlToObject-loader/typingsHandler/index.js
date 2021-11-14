/**
 * 类型处理
 */
const stringHandler = require('./stringHandler')
const numberHandler = require('./numberHandler')
const booleanHandler = require('./booleanHandler')

function typingsHandler(parent, type, attrs, text) {
    const { name } = attrs

    switch (type) {
        case 'string':
            stringHandler(parent, name, text)
            return
        case 'number':
            numberHandler(parent, name, text)
            return
        case 'boolean':
            booleanHandler(parent, name, text)
            return
        case 'null':
            parent[name] = null
            return
        case 'undefined':
            parent[name] = undefined
            return
        case 'array':

            return
        case 'object':

            return
        case 'function':

            return
        default:

            return
    }
}

module.exports = typingsHandler
