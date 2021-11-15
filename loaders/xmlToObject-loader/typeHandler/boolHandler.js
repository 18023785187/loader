/**
 * 布尔值类型的处理
 */
const add = require('./add')

function boolHandler(parent, attrs, text) {
    const {
        name
    } = attrs
    const val = Boolean(eval(text))

    add(parent, name, val)

    return val
}

module.exports = boolHandler