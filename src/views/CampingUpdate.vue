<template>
<div class="VendorUpdate">
  <Titulo/>
  <UpdateCampi/>

</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import UpdateCampi from '@/components/UpdateCampi.vue'

export default {
  name: 'CampingUpdate',
  components: {
    Titulo,
    UpdateCampi,
  }
}
</script>
