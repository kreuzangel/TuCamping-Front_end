<template>
  <div class="titulo">
    <p>DESTINOS POPULARES</p>
    <div class="Contenedor">
      <div class="card" >
        <img src="../Desierto-de-la-Tatacoa.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Desierto de la Tatacoa</p>
        </div>
      </div>
      <div class="card">
        <img src="../Planes-a-Villa-de-Leyva.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Villa de Leyva</p>
        </div>
      </div>
      <div class="card" >
        <img src="../suesca3-1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Suesca</p>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Destinos",
  props: {},
};
</script>

<style scoped>
.titulo{
    padding-top: 50px;
    color: black;
    font-family: 'Montserrat';
    font-size: 30px;
}
.Contenedor {
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  padding: 20px 0px 50px 0px;
}
.card-body {
  background-color: #4c922c;
  border-radius: 0px 0px 25px 25px;
  color: white;
  font-weight: bold;
  font-family: 'Montserrat';
  font-size: 24px;
}
.card {
  border-radius: 25px;
  max-width: 350px;
  max-height: 300px;
}
.card-img-top {
  object-fit: cover;
  width: 350px;
  height: 234px;
  border-radius: 25px 25px 0px 0px;
}
</style>