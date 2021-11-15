/**
 * 数组类型的处理
 */
const add = require('./add')

function arrHandler(parent, attrs) {
    const {
        name
    } = attrs
    const val = []

    add(parent, name, val)

    return val
}

module.exports = arrHandler