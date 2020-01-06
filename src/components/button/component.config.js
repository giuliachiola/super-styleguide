module.exports = {
  label: 'BU',
  variants: [
    {
      file: 'default.html',
      title: 'Default',
      description: 'For call to action type situations. Use only once per page.',
      label: 'BU-1',
      context: {
        button: {
          text: 'Click me',
          modifier: ''
        }
      }
    },
    {
      file: 'default.html',
      title: 'Secondary',
      description: 'The default button.',
      label: 'BU-2',
      context: {
        button: {
          text: 'Click me',
          modifier: 'secondary'
        }
      }
    }
  ]
}
