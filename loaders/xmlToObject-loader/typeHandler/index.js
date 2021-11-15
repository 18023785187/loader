/**
 * 处理集合
 */
const numHandler = require('./numHandler')
const strHandler = require('./strHandler')
const boolHandler = require('./boolHandler')
const nullHandler = require('./nullHandler')
const undefinedHandler = require('./undefinedHandler')
const objHandler = require('./objHandler')
const arrHandler = require('./arrHandler')

module.exports = {
    numHandler,
    strHandler,
    boolHandler,
    nullHandler,
    undefinedHandler,
    objHandler,
    arrHandler
}