/**
 * 把h文件转为AST
 */
const createAst = require('./createAst')
const createAstChild = require('./createAstChild')
/**
        const ast = {
            type: '',
            attrs: {

            },
            // 基本类型或方法
            text: '',
            // 数组和对象
            children: []
        }
 */

function hToAst(template) {
    template = template.replace(/\r\n/g, '')
    const root = createAstChild('object', {})
    createAst(root.children, template)
    return root
}

module.exports = hToAst