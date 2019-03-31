module.exports = {
  siteMetadata: {
    title: `MKrup`,
    author: `Mykolas Krupauskas`,
    description: `The personal website and blog of Mykolas Krupauskas`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: [
      {
        name: `Twitter`,
        link: `mkrupauskas`,
      },
      {
        name: `LinkedIn`,
        link: `mkrupauskas`,
      },
      {
        name: `GitHub`,
        link: `mkrupauskas`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mykolas Krupauskas`,
        short_name: `MKrup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b58900`,
        display: `minimal-ui`,
        icon: ``,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
