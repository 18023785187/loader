/**
 * 把xml代码转为AST
 */
const createAst = require('./createAst')
const createAstChild = require('./createAstChild')

function xmlToAst(template) {
    // 去除所有缩进符与换行符
    template = template.replace(/\r\n/g, '')
    const root = createAstChild('object', {})
    createAst(root.children, template)
    return root
}

module.exports = xmlToAst