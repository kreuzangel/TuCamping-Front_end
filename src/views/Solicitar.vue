<template>
<div class="Registro">
  <Titulo/>
  <SolicitarReserva/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import SolicitarReserva from '@/components/SolicitarReserva.vue'

export default {
  name: 'Solicitar',
  components: {
    Titulo,
    SolicitarReserva,
  }
}
</script>
