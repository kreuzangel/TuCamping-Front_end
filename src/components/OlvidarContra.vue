<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <div class="aux">
        <div class="ima">
          <img class="imagen" src="../Camping.png" alt="" />
        </div>
        <div class="formulario">
          <p class="Bien">Recuperar Contraseña</p>
          <p class="texto">
            Te enviaremos un enlace donde podras cambiar tu contraseña
          </p>
          <div class="user">
            <img class="imagen3" src="../email.png" alt="" />
            <input class="userinput" type="text" placeholder="Correo" />
          </div>
          <div>
            <input class="Ingresar" type="button" value="Enviar" />
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>
<script>
export default {
  name: "OlvidarContra",
  props: {},
};
</script>
<style scoped>
.Bigcont {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.Ingresar {
  background-color: #4c922c;
  width: 120px;
  height: 35px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 20px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 60px;

}
.Contenedor {
  width: 908px;
  height: 527px;
  background: rgba(119, 164, 98, 0.4);
  border: 1px solid #4c922c;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
}
.Bien {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  color: #4c922c;
  margin: 0px;
  margin-top: 80px;
}

.aux {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  margin: 0px;
}

.imagen {
  width: 370px;
  height: 410px;
  margin-top: 50px;
}

.imagen2 {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}
.imagen3 {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.user {
  width: 270px;
  height: 39px;
  display: flex;
  align-items: center;
  border-bottom: solid 2px black;
  margin-top: 60px;
}

.formulario {
  width: 400px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
}

.olvidar {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-right: 65px;
  color: black;
  font-size: 10px;
  padding-top: 5px;
  font-family: "Montserrat";
}

.userinput {
  border: none;
  background: rgba(0, 0, 0, 0);
}
.userinput::placeholder {
  color: black;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 20px;
  padding-left: 5px;
}

.userinput:focus {
  outline: none;
}
.texto {
  width: 270px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin-bottom: 0px;
  margin-top: 20px;
  font-weight: bold;
}
</style>