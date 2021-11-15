/**
 * 对象类型的处理
 */
const add = require('./add')

function objHandler(parent, attrs) {
    const {
        name
    } = attrs
    const val = {}

    add(parent, name, val)
    
    return val
}

module.exports = objHandler