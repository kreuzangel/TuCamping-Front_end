<template>
<div class="Login">
  <Titulo/>
  <Logincamp/>
</div>
</template>
<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import Logincamp from '@/components/Logincamp.vue'

export default {
  name: 'Login',
  components: {
    Titulo,
    Logincamp,
  }
}
</script>
