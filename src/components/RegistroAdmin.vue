<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <p class="Bien">Registrate</p>
      <div class="aux">
        <div class="formulario">
          <div class="user">
            <input class="userinput" type="text" placeholder="Nombre" />
          </div>
          <div class="user">
            <input class="userinput" type="text" placeholder="Apellido" />
          </div>
          <div class="user">
            <input class="userinput" type="text" placeholder="Teléfono" />
          </div>
          <div class="user">
            <input class="userinput" type="text" placeholder="Correo" />
          </div>
          <div class="user">
            <input class="userinput" type="text" placeholder="Contraseña" />
          </div>
          <div class="user">
            <input
              class="userinput"
              type="text"
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>
        <div class="ima">
          <img class="imagen" src="../Outdoor.png" alt="" />
          <input class="Ingresar" type="button" value="Registrate" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegistroAdmin",
  props: {},
};
</script>
<style scoped>
.ima {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.Bigcont {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.Ingresar {
  background-color: #4c922c;
  width: 148px;
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
  margin-top: 30px;
}
.Contenedor {
  width: 1200px;
  height: 754px;
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
  font-size: 48px;
  line-height: 59px;
  color: #4c922c;
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 0px;
}

.aux {
  display: flex;
  flex-direction: row;
  margin: 0px;
  align-items: center;
  justify-content: space-evenly;
}

.imagen {
  width: 370px;
  height: 410px;
  margin-bottom: 30px;
}
.user {
  display: flex;
  min-width: 550px;
  min-height: 55.11px;
  background: #ffffff;
  border: 1px solid #4c922c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 17px;
  align-content: center;
  align-items: center;
}

.formulario {
  width: 550px;
  height: 516.11px;
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
  padding: 20px;
  width:550px ;
}
.userinput::placeholder {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
}

.userinput:focus {
  outline: none;
}
</style>