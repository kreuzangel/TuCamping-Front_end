<template>
  <div class="contenedor_titulo">
    <div class="Titulo">
        <img src="../tent.png" class="logo" alt="..." />
        <p>TuCamping</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Titulo",
  props: {},
};
</script>
<style scoped>
.contenedor_titulo {
  display: flex;
  top: 5px;
  padding: 20px;
  color: #fff;
  justify-content: center;
  z-index: 1;
}
.Titulo {
  height: 78px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  display: flex;
  align-items: baseline;
  text-align: right;
  color: #4c922c;
}
.logo {
  max-width: 70px;
}

</style>
