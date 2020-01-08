// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@content', process.cwd() + '/content')
// Config
const data = require('./content.js')
// const { success, warning, error, command } = require('./chalk-config');

/**
 *
 * @param {number} maxValue the maximum random value to return
 * @description returns a random number up to maxValue. Emits 0 if ENV is set to 'test' or 'production'
 * allowing tests to run stable
 */
const getRandom = (maxValue, minValue = 0) => {
  return (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production') ? 0 : Math.floor(Math.random() * (Math.floor(maxValue) - minValue) + minValue)
}

/* ------------------
  Rand item
------------------ */

const randItem = (arg, options = {}) => {
  let list = data[arg]

  if (options.clearLinks) {
    // clean abstract from links: remove all <a> tags
    list = list.map(item => item.replace(/<a href="#">/gi, '').replace(/<\/a>/gi, ''))
  }

  return list && list[getRandom(list.length)] || `${arg} does not exist`
}

const getRandomBool = () => {
  return Math.random() >= 0.5
}

module.exports = {
  // general
  randItem,
  getRandom,
  getRandomBool,
}
