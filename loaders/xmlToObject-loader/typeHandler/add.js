/**
 * 添加操作
 */

function add(parent, key, val) {
    switch (Object.prototype.toString.call(parent)) {
        case '[object Object]':
            parent[key] = val
            break;
        case '[object Array]':
            parent.push(val)
            break;
        default:
            break;
    }
}

module.exports = add