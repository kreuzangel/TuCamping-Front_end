<template>
<div>
  <div class="card">
    <div class="Izq">
      <img src="../Noche.jpg" class="Imagen" alt="" />
    </div>
    <div>
      <p class="city">Desierto Tatacoa</p>
      <p class="namecamp">Desierto Tatacoa</p>
      <p class="descripcion">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quos
        nihil eum, reprehenderit, ipsa laudantium nisi inventore officiis
        ratione adipisci excepturi, dolor similique! Architecto, quae quo ab qui
        aut ipsa.
      </p>
    </div>
    <div class="vl"></div>
    <div class="der">
      <p class="precio">$100.000</p>
      <p class="precionoche">Precio por persona por noche</p>
      <input
        class="Solicitar"
        type="button"
        value="Solicitar"
      />
    </div>
  </div>
    <div class="card">
    <div class="Izq">
      <img src="../Noche.jpg" class="Imagen" alt="" />
    </div>
    <div>
      <p class="city">Desierto Tatacoa</p>
      <p class="namecamp">Desierto Tatacoa</p>
      <p class="descripcion">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quos
        nihil eum, reprehenderit, ipsa laudantium nisi inventore officiis
        ratione adipisci excepturi, dolor similique! Architecto, quae quo ab qui
        aut ipsa.
      </p>
    </div>
    <div class="vl"></div>
    <div class="der">
      <p class="precio">$100.000</p>
      <p class="precionoche">Precio por persona por noche</p>
      <input
        class="Solicitar"
        type="button"
        value="Solicitar"
      />
    </div>
  </div>
    <div class="card">
    <div class="Izq">
      <img src="../Noche.jpg" class="Imagen" alt="" />
    </div>
    <div>
      <p class="city">Desierto Tatacoa</p>
      <p class="namecamp">Desierto Tatacoa</p>
      <p class="descripcion">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quos
        nihil eum, reprehenderit, ipsa laudantium nisi inventore officiis
        ratione adipisci excepturi, dolor similique! Architecto, quae quo ab qui
        aut ipsa.
      </p>
    </div>
    <div class="vl"></div>
    <div class="der">
      <p class="precio">$100.000</p>
      <p class="precionoche">Precio por persona por noche</p>
      <input
        class="Solicitar"
        type="button"
        value="Solicitar"
      />
    </div>
  </div>
    <div class="card">
    <div class="Izq">
      <img src="../Noche.jpg" class="Imagen" alt="" />
    </div>
    <div>
      <p class="city">Desierto Tatacoa</p>
      <p class="namecamp">Desierto Tatacoa</p>
      <p class="descripcion">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quos
        nihil eum, reprehenderit, ipsa laudantium nisi inventore officiis
        ratione adipisci excepturi, dolor similique! Architecto, quae quo ab qui
        aut ipsa.
      </p>
    </div>
    <div class="vl"></div>
    <div class="der">
      <p class="precio">$100.000</p>
      <p class="precionoche">Precio por persona por noche</p>
      <input
        class="Solicitar"
        type="button"
        value="Solicitar"
      />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "StockCamp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 1200px;
  height: 300px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border: solid;
  border-color: #4c922c;
  border-width: 1px;
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-self: center;
}
.Izq {
  width: 400px;
  height: 300px;
  border-radius: 25px 0px 0px 25px;
}
.der {
  width: 300px;
  height: 300px;
  border-radius: 0px 25px 25px 0px;
}
.Imagen {
  width: 400px;
  object-fit: cover;
  height: 300px;
  border-radius: 25px 0px 0px 25px;
}
.city {
  padding: 30px 20px 10px 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #4c922c;
  width: 550px;
}
.namecamp {
  padding: 0px 0px 0px 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #000000;
  width: 550px;
}
.descripcion {
  padding: 0px 40px 0px 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;

  color: #000000;
  width: 550px;
}
.vl {
  margin-top: 30px;
  border-left: 3px solid #4c922c;
  height: 240px;
}
.precio {
  margin-top: 60px;
  padding-bottom: 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 29px;
  color: #000000;
}
.precionoche {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}
.Solicitar{
  background-color: #4c922c;
  width: 120px;
  height: 35px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
  border: none;
  margin-top: 80px;
}
</style>
