<template>
<footer class="themefooter">

<div class="container">
<div class="row justify-content-between">
<div class="col">
 




<div style="color: #000;border-radius: 25px; height: 280px; width: 320px; background-color: #fff; padding: 20px; background-position: left top; padding: 20px;">
    <a href="/"><img src="https://cdn.forestry.io/res2/5nCQbpDfRJxHCjIoded-EMLNZGp_hfoVa4yFLWdclK4/fit/512/512/sm/0/aHR0cHM6Ly9hcHAu/Zm9yZXN0cnkuaW8v/cmFpbHMvYWN0aXZl/X3N0b3JhZ2UvYmxv/YnMvZXlKZmNtRnBi/SE1pT25zaWJXVnpj/MkZuWlNJNklrSkJh/SEJDUjFsdGNFRjNQ/U0lzSW1WNGNDSTZi/blZzYkN3aWNIVnlJ/am9pWW14dllsOXBa/Q0o5ZlE9PS0tN2Iw/NGFiMjMwNjQzY2Yx/YjA1NTlmOTkwZjZk/NDQ2MWFlNWM2MjE5/OC9TY3JlZW5zaG90/XzIwMjEtMDQtMjYl/MjBWb2x1bnRlZXIl/MjBhbmQlMjBJbnRl/cm5zaGlwJTIwUHJv/Z3JhbSUyMC0lMjBT/ZXh0byUyMFNvbCwl/MjBNZXhpY28lMjBh/bmQlMjBHdWF0ZW1h/bGEucG5n" class="logofooter" width="322" height="37"></a> 
    <br><br> <form action="https://www.paypal.com/cgi-bin/webscr" method="post"><font size="2" face="helvetica">Please donate monthly if you can</font> 

    <br><b>$</b><input type="textfield" name="a3" value="" size="10"> <br><font size="2" face="helvetica">
    for <input type="text fields" name="Number_of_Months" value="12" size="2"> months*<br><br></font><font face="helvetica"><input type="hidden" name="p3" value="1"> <input type="hidden" name="no_note" value="1"> <input type="hidden" name="t3" value="M"> <input type="hidden" name="src" value="1"> <input type="hidden" name="sra" value="1"> <input type="hidden" name="cmd" value="_xclick-subscriptions"> <input type="hidden" name="return" value="http://www.sextosol.org/thanks.html"> <input type="hidden" name="currency_code" value="USD"> <input type="image" src="https://www.paypal.com/images/x-click-but20.gif" name="submit3" alt="Click here to make monthly payments with PayPal.  It's fast, free and secure!" width="62" height="31" border="0"> <input type="hidden" name="business" value="donations@sextosol.org"> <input type="hidden" name="item_name" value="The Sexto Sol Center"> <input type="hidden" name="item_number" value="Winter 2005 appeal"> <br></font></form>
    

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
<li><script type="text/javascript" src="http://jj.revolvermaps.com/t.js"></script><script type="text/javascript">rmt_ki101('0',130,'9dl9sih00gd','00fff6');</script></li>         

<li v-for="item in copyright" :key="item.text" class="copyright-item">
<NavLink :link="item.link">{{ item.text }}</NavLink>
</li>
</ul>

    <table><tr><td>
    <a href="https://greatnonprofits.org/org/sexto-sol-center-for-community-action?badge=1"><img 
       src="/assets/img/top_rated-hi-res-1.png" alt="top rated" title="top rated non profits" border=0></a>
       </td><td>     
        <h3 style="color: sienna;">Helping people to improve life for their communities since 1997</h3>
       </td></tr>
    </table>




</div>
</div>
</div>

<div class="col text-center">
<b>Contact/ Donate:</b>
<br>The Sexto Sol Center,
<br>Attn: Luis Manriquez,
<br>5764 E Hampton Ave, Mesa AZ 85206
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
