<template>

  <div class="Cont">
    <img src="../ban.jpg" class="Image" alt="" />
    <div class="Titulo">
      <img src="../tent.png" class="logo" alt="..." />
      <p><router-link to="/">TuCamping</router-link></p>
    </div>
  </div>
</template> 

<script>
export default {
  name: "StockHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Cont {
  /* position: relative; */
  text-align: center;
  width: 100%;
  height: 200px;
}
.Image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  ;
}
.Titulo {
  position: absolute;
  top: 5%;
  left: 10%;
  height: 78px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  display: flex;
  justify-content: center;
  text-align: right;
  color: #fff;
}
.Titulo a{
  color: white;
}
.logo {
  max-width: 70px;
}
</style>
