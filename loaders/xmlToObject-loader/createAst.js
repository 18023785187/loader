/**
 * 生成ast
 */
const createAstChild = require('./createAstChild')

const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
// 起始标签开口
const startTagOpen = new RegExp(`^<${qnameCapture}`)
// 起始标签闭口
const startTagClose = /^\s*(\/?)>/
// 获取属性
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
// 结束标签
const endTag = new RegExp(`<\\/${qnameCapture}[^>]*>`)

function createAst(children, template) {
    handler(children)

    // 处理函数
    function handler(children) {
        while (template) {
            const startRes = startHandler()
            if (startRes) {
                const text = endHandler()
                const {
                    type,
                    attrs,
                    children: _children
                } = startRes

                children.push(createAstChild(type, attrs, text, _children))
            } else {
                return
            }
        }
    }

    // 处理开口标签
    function startHandler() {
        template = template.trim()
        const startTagOpenMatch = template.match(startTagOpen)
        if (startTagOpenMatch) {
            const startTagOpenLen = startTagOpenMatch[0].length
            const type = startTagOpenMatch[1]
            template = template.substring(startTagOpenLen)
            // 获取标签内的属性
            const attrs = attrsHandler()

            const startTagCloseMatch = template.match(startTagClose)
            if (startTagCloseMatch) {
                template = template.trim()
                const startTagCloseLen = startTagCloseMatch[0].length
                template = template.substring(startTagCloseLen)

                // 下一个儿子的儿子
                let children = []
                handler(children)

                return {
                    type,
                    attrs,
                    children
                }
            }
        }
    }
    // 处理属性
    function attrsHandler() {
        const attrs = {}
        let attrMatch
        while (attrMatch = template.match(attribute)) {
            const attrLen = attrMatch[0].length
            const key = attrMatch[1]
            const value = attrMatch[4]
            template = template.substring(attrLen).trim()
            attrs[key] = value
        }
        return attrs
    }
    // 处理闭口标签
    function endHandler() {
        template = template.trim()
        const endTagMatch = template.match(endTag)
        if (endTagMatch) {
            const endTagLen = endTagMatch[0].length
            const indexOf = endTagMatch.index
            const text = template.substring(0, indexOf)
            template = template.substring(endTagLen + text.length)
            template = template.substring(template.indexOf('<'))
            return text
        } else {
            throw new Error('')
        }
    }
}

module.exports = createAst