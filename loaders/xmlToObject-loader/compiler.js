/**
 * 编译ast转换成js对象
 * 传入父亲（可以是对象或数组等），ast列表，扫描ast列表把解析后的键值对赋值给父亲
 */
const {
    numHandler,
    strHandler,
    boolHandler,
    nullHandler,
    undefinedHandler,
    objHandler,
    arrHandler
} = require('./typeHandler')
const compilerTypings = ['[object Object]', '[object Array]']

function compiler(parent, astList) {
    if (!compilerTypings.includes(Object.prototype.toString.call(parent))) return

    for (const ast of astList) {
        const {
            type,
            attrs,
            text,
            children
        } = ast

        const val = typeHandler(parent, type, attrs, text)

        if (children.length) {
            compiler(val, children)
        }
    }


}

// 处理类型, 返回挂载上去的值
function typeHandler(parent, type, attrs, text) {
    switch (type) {
        case 'number':
            return numHandler(parent, attrs, text)
        case 'string':
            return strHandler(parent, attrs, text)
        case 'boolean':
            return boolHandler(parent, attrs, text)
        case 'null':
            return nullHandler(parent, attrs)
        case 'undefined':
            return undefinedHandler(parent, attrs)
        case 'object':
            return objHandler(parent, attrs)
        case 'array':
            return arrHandler(parent, attrs)
        default:
            return
    }
}

module.exports = compiler