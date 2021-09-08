<template>
<div class="Registro">
  <Titulo/>
  <RegistroCampi/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import RegistroCampi from '@/components/RegistroCampi.vue'

export default {
  name: 'Regiscamp',
  components: {
    Titulo,
    RegistroCampi,
  }
}
</script>
