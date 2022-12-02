module.exports = {
  title: 'Sextosol Center',
  base: '/',
  dest: 'public',
  description: 'Helping rural people create solutions for their families and communities',
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
          link: 'https://github.com/biomassives/sextosol-blog-theme',
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
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Sexto Sol Center uses Foresty.io.',
          link: 'https://forestry.io/',
        },
        {
          text: 'Policy Analysis',
          link: 'https://sextosol.org/2021/04/24/policy-analysis/',
        },
        {
          text: 'Human Rights',
          link: 'https://sextosol.org/2021/04/24/promoting-right-use-of-resources-and-human-rights/',
        },
        {
          text: 'Reforestation',
          link: 'https://sextosol.org/2021/04/24/reforestation/',
        },      
        {
          text: 'Upcycling',
          link: 'https://sextosol.org/2021/04/24/upcycling/',
        },        
        {
          text: 'Solar',
          link: 'https://sextosol.org/2021/04/24/solar-furnaces/',
        },          
        {
          text: 'Volunteer',
          link: 'https://sextosol.org/2021/04/24/volunteer-and-internship-program/',
        },            
        {
          text: 'Indigenous People',
          link: 'https://sextosol.org/2021/04/24/indigenous-people-first-nations/',
        }, 
        {
          text: 'Permaculture',
          link: 'https://sextosol.org/2021/04/24/permaculture/',
        },        
        {
          text: 'Ecotourism',
          link: 'https://sextosol.org/2021/04/24/ecotourism/',
        },    
        {
          text: 'Ecovillages',
          link: 'https://sextosol.org/2021/04/24/eco-villages/',
        },    
      ],
    },

    sitemap: {
      hostname: 'https://sextosol.org/'
    },
    comment: {
      service: '#',
      shortname: '#',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://github.com/biomassives/sextosol-blog-theme/',
    },
    smoothScroll: true
  },
}
