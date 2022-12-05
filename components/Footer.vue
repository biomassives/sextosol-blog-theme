<template>
<footer class="themefooter">

<div class="container">
<div class="row justify-content-between">
<div class="col">

<div style="color: #000; border-radius: 25px; background: #73AD21; padding: 20px; background-position: left top; background-repeat: repeat; padding: 20px;">


<a href="/"><img class="logofooter" width="322" height="37" :src="($withBase)($themeConfig.logo)"></a>

 <BR />
   
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <font size="2" face="helvetica"><input type="textfield" name="a3" value="" size="10">Please donate monthly if you can</font>
    <br><font size="2" face="helvetica">
    for <input type="text fields" name="Number_of_Months" value="12" size="2"> months*<br><br></font><font face="helvetica">
    <input type="hidden" name="p3" value="1">
    <input type="hidden" name="no_note" value="1">
    <input type="hidden" name="t3" value="M">
    <input type="hidden" name="src" value="1">
    <input type="hidden" name="sra" value="1">
    <input type="hidden" name="cmd" value="_xclick-subscriptions">
    <input type="hidden" name="return" value="http://www.sextosol.org/thanks.html">
    <input type="hidden" name="currency_code" value="USD">
    <input type="image" src="https://www.paypal.com/images/x-click-but20.gif" name="submit3" alt="Click here to make monthly payments with PayPal.  It's fast, free and secure!" width="62" height="31" border="0">
    <input type="hidden" name="business" value="donations@sextosol.org">
    <input type="hidden" name="item_name" value="The Sexto Sol Center">
    <input type="hidden" name="item_number" value="Winter 2005 appeal">
    <br>
    </form>
</div>





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
