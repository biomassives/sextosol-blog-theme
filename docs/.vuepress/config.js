module.exports = {
  title: 'The Sexto Sol Center',
  base: '/',
  dest: 'public',
  description: 'The Sexto Sol Center for Community Action is a U.S. based non-profit organization (501(c)3) dedicated to implementing grassroots solutions to the severe economic and ecological challenges faced by impoverished indigenous campesino communities in the Sierra Madre of Chiapas.',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'a',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'b',
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
          link: 'https://www.facebook.com/The-Sexto-Sol-Center-211129337269/?ref=hl',
        },
        {
          type: 'github',
          link: '#',
        },
        {
          type: 'youtube',
          link: 'https://www.youtube.com/channel/UC7kqtf_yv9Mf0GvRtBdKWPg',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/tamara-brennan-126b7754/',
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
          text: 'Donate',
          link: 'https://www.paypal.com/donate?token=8LySedvicNp1hkesjTrym3dRChyPdrba4i31-FxUgrcfpwgYhcursy4vGNYkDfRfTsX0ku3cL9DwtJdQ',
        },    
        {
          text: 'Site uses Vercel, Git, Foresty.io',
          link: 'https://github.com/biomassives/sextosol-blog-theme',
        },
        {
          text: '© 2022, 2023 Tamara Brennan, The Sexto Sol Center',
          link: '#',
        },
      ],
    },

    sitemap: {
      hostname: 'https://sextosol.org/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://sextosol.org/',
    },
    smoothScroll: true
  },
}
