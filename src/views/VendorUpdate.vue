<template>
<div class="VendorUpdate">
  <Titulo/>
  <VendorProfileUpdate/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import VendorProfileUpdate from '../components/VendorProfileUpdate.vue'

export default {
  name: 'VendorUpdate',
  components: {
    Titulo,
    VendorProfileUpdate,
  }
}
</script>
