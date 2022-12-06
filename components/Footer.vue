<template>
<footer class="themefooter">








<div class="container">


        <style>
        nav {    
            display: block;
            text-align: left;
          }
          nav ul {
            margin: 0;
            padding:0;
            list-style: none;
          }
          .nav a {
            display:block; 
            background: #111; 
            color:#fff; 
            text-decoration: none;
            padding: .8em 1.8em;
            text-transform: none;
            font-size: 80%;letter-spacing: 2px;
            text-shadow: 0 -1px 0 #000;
            position: relative;
          }
          .nav{  
            vertical-align: top; 
            display: inline-block;
            box-shadow: 1px -1px -1px 1px #000, -1px 1px -1px 1px #fff, 0 0 6px 3px #fff;
            border-radius:6px;
          }
          .nav li{position: relative;}
          .nav > li { 
            float:left; 
            border-bottom: 4px #aaa solid; 
            margin-right: 1px; 
          } 
          .nav > li > a { 
            margin-bottom:1px;
            box-shadow:inset 0 2em .33em -.5em #555; 
          }
          .nav > li:hover , .nav > li:hover >a{  border-bottom-color:orange;}
          .nav li:hover > a { color:orange; }
          .nav > li:first-child  { border-radius: 4px 0 0 4px;} 
          .nav > li:first-child>a{border-radius: 4px 0 0 0;}
          .nav > li:last-child  { 
            border-radius: 0 0 4px 0; 
            margin-right: 0;
          } 
          .nav > li:last-child >a{border-radius: 0 4px 0 0; }
          .nav li li a { margin-top:1px}



            .nav li a:first-child:nth-last-child(2):before { 
             content:""; 
             position: absolute; 
             height:0; 
             width: 0; 
             border: 5px solid transparent; 
             top: 50% ;
             right:5px;  
           }





           /* submenu positioning*/
        .nav ul {
          position: absolute;
          white-space: nowrap;
          border-bottom: 5px solid  rgb(50, 243, 43);
          z-index: 1;
          left: -99999em;
        }
        .nav > li:hover > ul {
          left: auto;
          padding-top: 5px  ;
          min-width: 100%;
        }
        .nav > li li ul {  border-left:1px solid #fff;}


        .nav > li li:hover > ul { 
         /* margin-left: 1px */
          left: 100%;
          top: -1px;
        }
        /* arrow hover styling */
        .nav > li > a:first-child:nth-last-child(2):before { 
          border-top-color: #FFE4C4; 
        }
        .nav > li:hover > a:first-child:nth-last-child(2):before {
          border: 5px solid transparent; 
          border-bottom-color: rgb(133, 235, 49); 
          margin-top:-5px
        }
        .nav li li > a:first-child:nth-last-child(2):before {  
          border-left-color: rgb(230, 89, 8); 
          margin-top: -5px
        }
        .nav li li:hover > a:first-child:nth-last-child(2):before {
          border: 5px solid transparent; 
          border-right-color: rgb(255, 61, 61);
          right: 10px; 
        }


        </style>

        <nav>
          <ul class="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Español</a></li>
            <li><a href="#">What We Do</a>
              <ul>
                <li><a href="#">Humanitarian Crisis Health</a>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Why We Do This</a></li>
                        <li><a href="#">Science Behind This</a></li>
                        <li><a href="#">Previous Efforts</a></li>
                        <li><a href="#">Hurricaine Stan</a></li>
                    </ul>

                </li>
                <li><a href="#">Water to Communities</a></li>
                <li><a href="#">Livelihoods</a>
                    <ul>
                        <li><a href="#">Coffee Solutions</a></li>
                        <li><a href="#">Fair Trade</a></li>
                        <li><a href="#">Artisan Cooperatives</a></li>
                        <li><a href="#">Eco Tourism</a></li>
                        <li><a href="#">Women</a></li>
                    </ul>

                </li>
                <li><a href="#">Sustainable Food</a>
                    <ul>        
                        <li><a href="#">Permaculture School</a></li>
                        <li><a href="#">Family Gardens</a></li>
                        <li><a href="#">Ecovillages</a></li>
                    </ul>
                </li>
                <li><a href="#">Solar Solutions</a>
                    <ul>        
                        <li><a href="#">Solar Ovens</a></li>
                        <li><a href="#">Solar Furnace</a></li>
                        <li><a href="#">Water Heaters</a></li>
                    </ul>
                </li>
                <li><a href="#">Improving Schools</a>
                    <ul>        
                        <li><a href="#">Bilingual Education</a></li>
                        <li><a href="#">Books & Encyclopedias</a></li>
                        <li><a href="#">Improve Infrastructure</a></li>
                        <li><a href="#">Indigenous Languages</a></li>
                    </ul>
                </li>
                <li><a href="#">Environment</a>
                    <ul>        
                        <li><a href="#">Reforestation</a></li>
                        <li><a href="#">Environmental Justice</a></li>
                        <li><a href="#">Upcycling</a></li>
                    </ul>
                </li>
                <li><a href="#">Advocacy Work</a>
                    <ul>        
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Grassroots Organizations</a></li>
                    </ul>
                </li>
                <li><a href="#">Policy Analysis</a>
                    <ul>        
                        <li><a href="#">Globalization</a></li>
                        <li><a href="#">Indigenous Peoples</a></li>
                        <li><a href="#">Poverty Reduction</a></li>
                    </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Philosophy</a>
                <ul>
                  <li><a href="#">Our Approach</a></li>
                  <li><a href="#">Commitments</a></li>
                </ul>
              </li>
              <li><a href="#">Issues</a>
                  <ul>
                      <li><a href="#">Poverty</a></li>
                      <li><a href="#">Coffee Challenges</a></li>
                      <li><a href="#">Environment</a></li>
                      <li><a href="#">Women</a></li>
                      <li><a href="#">Suggested Reading</a></li>
                    </ul>    
            </li>
            <li><a href="#">Volunteer</a>
                <ul>
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Donate</a></li>
                </ul>    
            </li>
          </ul>
        </nav>


<div class="row justify-content-between">
<div class="col">

<div style="border-radius: 25px;  height: 310px; width: 350px; background-color: #ff5733;">
<div style="color: #000; border-radius: 25px; height: 280px; width: 320px; background-color: #fff; padding: 20px; background-position: left top; padding: 20px;">


<a href="/"><img class="logofooter" width="322" height="37" :src="($withBase)($themeConfig.logo)"></a>

 <BR />
   
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <font size="2" face="helvetica">Please donate monthly if you can</font>
    <br><b>$</b><input type="textfield" name="a3" value="" size="10"> 
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
