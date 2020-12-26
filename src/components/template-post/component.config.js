// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@content', process.cwd() + '/content')
// Config
// const path = require('path')
// const RenderDocs = require('@scripts/render-docs.js')
// const variant = new RenderDocs(path.dirname(__filename))
// Components
const { randItem, getRandom } = require('@content/dynamic-content.js')

const postContext = {
  uiContext: {
    containerModifiers: ['ui-container--medium-bg'],
    componentModifiers: ['ui-card'],
  },
  hero: {
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    img: `https://www.seekpng.com/png/full/3-38187_free-botanical-drawings-for-bullet-journaling-bullet-journal.png`,
  },
  articleSection: {
    date: randItem('dates'),
    tags: Array.from({length: getRandom(4, 1)}, () => randItem('tags').label),
  }
}

module.exports = {
  label: 'TPL',
  variants: [
    {
      file: 'default.ejs',
      context: postContext,
    },
    {
      file: 'dark-mode.ejs',
      context: postContext,
    }
  ],
}
