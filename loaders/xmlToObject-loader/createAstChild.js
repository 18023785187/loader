/**
 * 生成ast子数
 */

function astChild(type, attrs, text = undefined, children = []) {
    return {
        type,
        attrs,
        text,
        children
    }
}

module.exports = astChild