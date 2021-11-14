/**
 * 主文件
 */
const xmlToAst = require('./xmlToAst')
const astToObj = require('./astToObject')

module.exports = function(source) {

    return `
        export default () => {
            return eval((${JSON.stringify(astToObj(xmlToAst(source)))}))
        }
    `
}
