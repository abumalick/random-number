module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Random number',
        short_name: 'Random number',
        start_url: '/',
        background_color: '#6496f6',
        theme_color: '#000696',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
};
