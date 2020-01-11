module.exports = {
  label: 'HE',
  variants: [
    {
      file: 'default.ejs',
      title: 'Default',
      // label: 'HE-1',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        hero: {
          title: `My awesome blog 🚀`,
          subtitle: `This is where I write everything I think it'd be helpful to someone else<br>or - you know - the future me.`,
        }
      }
    },
  ]
}
