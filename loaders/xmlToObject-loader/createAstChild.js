/**
 * ast模板生成
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