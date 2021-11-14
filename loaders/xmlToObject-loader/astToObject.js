/**
 * ast转obj
 */
const typingsHandler = require('./typingsHandler')

function astToObj(ast){
    const obj = {}
    const children = ast.children
    
    compile(obj, children)

    function compile(parent, astList) {
        astList.forEach(ast => {
            const {
                type,
                attrs,
                text,
                children
            } = ast

            compile(parent, type, attrs, text)
        })
    }

    return obj
}

module.exports = astToObj