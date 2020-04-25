const hero = {
  title: `My awesome blog 🚀`,
  subtitle: `This is where I write everything I think it'd be helpful to someone else<br>or - you know - the future me.`,
}

module.exports = {
  label: 'HE',
  variants: [
    // Default
    {
      file: 'default.ejs',
      title: 'Default',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        hero: {
          ...hero,
          mainTag: 'git',
        }
      }
    },
    // Hero with image
    {
      file: 'default.ejs',
      title: 'Hero with image',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        hero: {
          ...hero,
          img: `https://images.unsplash.com/photo-1504237111663-37d6094bec09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80`,
          credits: 'Giulia Chiola',
        }
      },
    },
    // Hero with quote
    {
      file: 'default.ejs',
      title: 'Hero with quote',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        hero: hero,
      },
    },
  ]
}
