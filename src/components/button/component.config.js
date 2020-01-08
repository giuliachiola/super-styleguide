module.exports = {
  label: 'BU',
  variants: ['default.ejs'],
  variants: [
    {
      file: 'default.ejs',
      title: 'Default',
      description: 'For call to action type situations. Use only once per page.',
      label: 'BU-1',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        button: {
          text: 'Default button',
          modifier: ''
        }
      }
    },
    {
      file: 'default.ejs',
      title: 'Secondary',
      description: 'The default button.',
      label: 'BU-2',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        button: {
          text: 'Secondary button',
          modifier: 'secondary'
        }
      }
    }
  ]
}
