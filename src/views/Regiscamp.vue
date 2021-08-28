<template>
<div class="Registro">
  <Titulo/>
  <RegistroCamp/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import RegistroCamp from '@/components/RegistroCamp.vue'

export default {
  name: 'Regiscamp',
  components: {
    Titulo,
    RegistroCamp,
  }
}
</script>
