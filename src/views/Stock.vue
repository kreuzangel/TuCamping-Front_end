<template>
  <div class="vista">
    <StockHeader/> 
    <Barra/> 
    <StockCamp/> 
  </div>
</template>

<script>
// @ is an alias to /src
import StockHeader from '@/components/StockHeader.vue'
import Barra from '@/components/Barra.vue'
import StockCamp from '@/components/StockCamp.vue'

export default {
  name: 'Stock',
  components: {
    StockHeader,
    Barra,
    StockCamp,
  }
    
}
</script>
<style scoped>
.vista{
    display: block;
}
</style>