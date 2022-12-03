module.exports = {
  title: 'Global Urban Food Forests',
  base: '/',
  dest: 'public',
  description: 'A vision for food access, greater general awareness of food production in the informal kitchen garden format, credited to the wisdom of indigenous farmer/ cooks.',
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
          link: 'https://github.com/biomassives/sextosol-blog-theme/tree/maryholtz.art',
        },
        {
          text: '© 2022 Global Urban Food Forests',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://vercel.com/ecocity/globalurbanfoodforests'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://vercel.com/ecocity/globalurbanfoodforests',
    },
    smoothScroll: true
  },
}
