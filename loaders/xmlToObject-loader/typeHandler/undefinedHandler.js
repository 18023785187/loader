/**
 * 未定义类型的处理
 */
const add = require('./add')

function undefinedHandler(parent, attrs) {
    const {
        name
    } = attrs
    const val = undefined 

    add(parent, name, val)

    return val
}

module.exports = undefinedHandler