module.exports = {
  label: 'PA',
  variants: ['default.ejs'],
  variants: [
    {
      file: 'default.ejs',
      title: 'Default',
      description: '',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
      }
    },
  ]
}
