<template>
<div>
 <header-nav></header-nav>  
<character-list></character-list>
<footer-nav></footer-nav>
</div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';
export default {
  name: 'App',
  components: {
    CharacterList, 
    HeaderNav,
    FooterNav 
  }
}


</script>

<style>
body{
  margin:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
