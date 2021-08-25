<template>
<div class="Registro">
  <Titulo/>
  <RegistroAdmin/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import RegistroAdmin from '@/components/RegistroAdmin.vue'

export default {
  name: 'Registro',
  components: {
    Titulo,
    RegistroAdmin,
  }
}
</script>
