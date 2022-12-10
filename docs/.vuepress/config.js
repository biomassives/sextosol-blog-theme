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
      link: '#',
      linktext: 'Follow',
      },
      {
        name: 'b',
        avatar: '/assets/img/avatar.png',
        link: '#',
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
          text: 'Donate $100/ mo.',
          link: 'https://www.paypal.com/webapps/hermes?token=8CA67409EJ048601P&mfid=1670634990331_f7237678a0e71&useraction=commit',
        },    
        {
          text: 'Donate $50/ mo.',
          link: 'https://www.paypal.com/webapps/hermes?token=8CA67409EJ048601P&mfid=1670634990331_f7237678a0e71&useraction=commit',
        },                  
        {
          text: 'Sponsor $35 / mo.',
          link: 'https://www.paypal.com/webapps/hermes?token=3MB616900T614782E&mfid=1670635772937_003b755116244&useraction=commit',
        },    
        {
          text: 'Sponsor $10 / mo.',
          link: 'https://www.paypal.com/webapps/hermes?token=1K2861397Y215903N&mfid=1670636006367_087743b06188b&useraction=commit',
        },    
        
        {
          text: 'Source code',
          link: 'https://github.com/biomassives/sextosol-blog-theme/tree/sextosol_repair1',
        },
        {
          text: '©2022,2023 The Sexto Sol Center',
          link: '',
        },
      ],
    },

    sitemap: {
      hostname: 'https://sextosol.org/'
    },
    comment: {
      service: 'disqus',
      shortname: 'sextosol',
    },
    newsletter: {
      endpoint: 'https://sextosol.us2.list-manage.com/subscribe?u=24abe2b217c6bfff52bd46b8e&id=b26714d01c'
    },
    feed: {
      canonical_base: 'https://sextosol.org/',
    },
    smoothScroll: true
  },
}
