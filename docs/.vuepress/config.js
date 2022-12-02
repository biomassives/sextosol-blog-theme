module.exports = {
  title: 'Mary Holtz Art',
  base: '/',
  dest: 'public',
  description: 'Creating art is the perfect anti-depressant, and in that healing power, I can find myself.',
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
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: '&copy; Mary Holtz Art 2022, 2023',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://maryholtz.art/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://maryholtz.art/',
    },
    smoothScroll: true
  },
}
