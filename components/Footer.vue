<template>
<footer class="themefooter">

<div class="container">
<div class="row justify-content-between">
<div class="col">
<a href="/"><img class="logofooter" width="224" height="50" src="https://app.forestry.io/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS3JxbnhNPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--19c5e1a84be2dc9d11f5ae2cd362b8d914e1ca3c/JASEHG0.webp"></a><BR>
<b>Mary Holtz Art</b>
</div>
<div class="col text-right">
<ul v-if="contact" class="list-unstyled">
<li
v-for="item in contact"
:key="item.iconComponent"
class="contact-item"
>
<NavLink :link="item.link">
<component :is="item.iconComponent"></component>
{{ item.text }}
</NavLink>
</li>
</ul>
<ul v-if="copyright" class="list-unstyled">
<li v-for="item in copyright" :key="item.text" class="copyright-item">
<NavLink :link="item.link">{{ item.text }}</NavLink>
</li>
</ul>
</div>
</div>
</div>

</footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'github':
          return 'GithubIcon'
      }
    },
  },
}
</script>
