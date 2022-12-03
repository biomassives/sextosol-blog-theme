module.exports = {
  title: 'Eco Ops App',
  base: '/',
  dest: 'public',
  description: 'Building a reliable paper trail system for tracking and validating informal group contributions to marketable carbon and biodiversity credits.',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: '#',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: '#',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'via Free Software.',
          link: 'https://github.com/biomassives/sextosol-blog-theme/tree/ecoopsapp',
        },
        {
          text: '© 2022, 2023 SCD Hub',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://ecocity.com/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://scdhub.us21.list-manage.com/subscribe/post?u=a71ab6b6253504d5c1d605f59&amp;id=5539c8deec&amp;f_id=009bc3e1f0'
    },
    feed: {
      canonical_base: 'https://ecoopd.vercel.app/',
    },
    smoothScroll: true
  },
}
