const { randItem, getRandom } = require('@content/dynamic-content.js')

const filterList = Array.from({length: getRandom(7, 3)}, () => randItem('tags').label)

module.exports = {
  filterList,
}
