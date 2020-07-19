module.exports = {
  label: 'BU',
  variants: ['default.ejs'],
  variants: [
    {
      file: 'default.ejs',
      title: 'Default',
      // description: 'Icons',
      label: 'ICONS',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        icons: [
          'codepen',
          'css',
          'design-system',
          'git',
          'github',
          'gitlab',
          'js',
          'mac-os',
          'markdown',
          'nodejs',
          'reindeer',
          'static-site-generator',
          'svg',
          'template-engine',
          'terminal',
          'twitter',
          'vsc',
          'vuejs',
        ]
      }
    },
  ]
}
