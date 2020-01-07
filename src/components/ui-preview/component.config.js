module.exports = {
  label: 'CA',
  variants: [
    {
      file: 'default.ejs',
      title: 'Default',
      description: 'For call to action type situations. Use only once per page.',
      label: 'BU-1',
      context: {
        uiContext: {
          containerModifiers: ['a'],
          componentModifiers: ['a'],
        }
      }
    },
  ],
}
