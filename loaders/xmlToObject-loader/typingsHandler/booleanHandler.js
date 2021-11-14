/**
 * 布尔值类型处理
 */

function booleanHandler(obj, key, val){
    if(val === 'true') {
        obj[key] = true
    } else if(val === 'false') {
        obj[key] = false
    } else {
        obj[key] = true
    }
}

module.exports = booleanHandler