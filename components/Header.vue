<template>
<section id="header-wrapper">
<header id="header">
<div class="header-wrapper">
<nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
<div class="container">
<NavLink link="/" class="navbar-brand"><img :src="($withBase)($themeConfig.logo)"> {{ $site.title }} </NavLink>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarsExampleDefault">
<ul v-if="$themeConfig.nav" class="navbar-nav ml-auto">
<li
v-for="item in $themeConfig.nav"
:key="item.text"
class="nav-item"
>
<NavLink :link="item.link" class="nav-link">{{ item.text }}</NavLink>
</li>
<SearchBox />
<Feed />
</ul>
</div>
</div>
</nav>



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



</div>
</header>
</section>
</template>

<script>
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { SearchBox, Feed },
}
</script>

<style lang="stylus">
@import '~@app/style/config'
// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          text-decoration none
          transition color 0.3s

    .search-box
      margin-left 20px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
