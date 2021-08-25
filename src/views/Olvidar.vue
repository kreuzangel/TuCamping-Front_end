<template>
<div class="Olvidar">
  <Titulo/>
  <OlvidarContra/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import OlvidarContra from '@/components/OlvidarContra.vue'

export default {
  name: 'Olvidar',
  components: {
    Titulo,
    OlvidarContra,
  }
}
</script>
