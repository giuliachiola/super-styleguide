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
          img: `https://images.unsplash.com/photo-1504237111663-37d6094bec09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80`,
        }
      }
    },
  ]
}
