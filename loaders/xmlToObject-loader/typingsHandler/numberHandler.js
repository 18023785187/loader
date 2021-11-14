/**
 * 数字类型处理
 */

function numberHandler(obj, key, val) {
    obj[key] = Number(val)
}

module.exports = numberHandler
