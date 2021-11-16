/**
 * 主文件
 */
const xmlToAst = require('./xmlToAst')
const astToObj = require('./astToObject')
const { stringify } = require('./utils')

module.exports = function(source) {

    return `
        export default () => {
            return eval((${stringify(astToObj(xmlToAst(source)))}))
        }
    `
}
