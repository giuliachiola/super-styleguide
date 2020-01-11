// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@content', process.cwd() + '/content')
// Components
const { randItem, getRandom } = require('@content/dynamic-content.js')

const cards = Array(15).fill(0).map(() => ({
  title: randItem('titles'),
  abstract: randItem('abstracts'),
  tags: Array.from({length: getRandom(4, 1)}, () => randItem('tags').label),
  mainTag: randItem('tags').img,
  date: randItem('dates'),
  hasImg: true,
}))

module.exports = {
  cards,
}
