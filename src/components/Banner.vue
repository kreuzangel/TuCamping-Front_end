<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-caption">
      <div class="divtit">
        <router-link to="/Registro">Tienes un camping? Regístrate.</router-link>
        <div class="Titulo">
          <img src="../tent.png" class="logo" alt="..." />
          <p >TuCamping</p>
        </div>

        <router-link to="/Login">Iniciar Sesión</router-link>
        <router-link to="/ProfileVendor">Perfil de Usuario</router-link>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../ban.jpg" class="d-block w-100" alt="..." height="600"/>
      </div>
      <div class="carousel-item">
        <img src="../banner2.jpg" class="d-block w-100" alt="..." height="600"/>
      </div>
      <div class="carousel-item">
        <img src="../Banner3.jpg" class="d-block w-100" alt="..." height="600"/>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template> 

<script>
export default {
  name: "Banner",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.carousel-caption {
  display: flex;
  top: 5px;
  padding-top: 20px;
  color: #fff;
  justify-content: center;
  z-index: 1;
}
.Titulo {
  height: 78px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  display: flex;
  align-items: baseline;
  text-align: right;
}
.divtit {
  min-width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-around;

}
.divtit a{
  color: #fff;
}
.logo {
  max-width: 70px;
}

</style>
