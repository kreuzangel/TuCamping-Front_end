<template>
  <div class="home">
    <Banner/> 
    <Barra/> 
    <Destinos/> 
    <Footer/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Barra from '@/components/Barra.vue'
import Destinos from '@/components/Destinos.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Barra,
    Destinos,
    Footer
  }
    
}
</script>

<style scoped>
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/montserrat-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v18-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
} 
</style>
