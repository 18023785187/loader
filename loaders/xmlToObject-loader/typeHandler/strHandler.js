/**
 * 字符串类型的处理
 */
const add = require('./add')

function strHandler(parent, attrs, text) {
    const {
        name
    } = attrs
    const val = String(text)

    add(parent, name, val)

    return val
}

module.exports = strHandler