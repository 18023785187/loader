/**
 * 空类型的处理
 */
const add = require('./add')

function nullHandler(parent, attrs) {
    const {
        name
    } = attrs
    const val = null

    add(parent, name, val)
    
    return val
}

module.exports = nullHandler