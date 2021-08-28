<template>
  <div class="Contenedor">
    <div class="contactenos"></div>
    <div class="derechos">© 2021 TuCamping. Todos los derechos reservados.</div>
  </div>
</template> 
<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped>
.Contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #d9ed92;
}
.contactenos {
  width: 100%;
  height: 150px;
  background: rgba(179, 226, 150, 0.5);
  font-family: 'Montserrat';
}
.derechos {
  width: 100%;
  height: 20px;
  background: #4c922c;
  font-family: 'Montserrat';
}
</style>