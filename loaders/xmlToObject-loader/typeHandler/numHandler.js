/**
 * 数字类型的处理
 */
const add = require('./add')

function numHandler(parent, attrs, text) {
    const {
        name
    } = attrs
    const val = Number(text)

    add(parent, name, val)

    return val
}

module.exports = numHandler