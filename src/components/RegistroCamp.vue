<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <p class="Bien">Registra tu camping</p>
      <div class="aux">
        <div class="formulario">
          <div class="user1">
            <input
              class="userinput"
              v-model="Regiscamp.nombre"
              type="text"
              placeholder="Nombre del camping"
            />
          </div>
          <div class="user">
            <input
              class="userinput"
              v-model="Regiscamp.ciudad"
              type="text"
              placeholder="Ciudad"
            />
          </div>
          <div class="user1">
            <input
              class="userinput"
              v-model="Regiscamp.direccion"
              type="text"
              placeholder="Dirección"
            />
          </div>
          <div class="user">
            <input
              class="userinput"
              v-model="Regiscamp.telefono"
              type="number"
              placeholder="Telefono"
            />
          </div>
          <div class="user1">
            <input
              class="userinput"
              type="text"
              placeholder="Precio por Noche"
            />
          </div>
          <div class="user2">
            <textarea
              class="userinput1"
              v-model="Regiscamp.descripcion"
              type="text"
              placeholder="Descripción"
            />
          </div>
        </div>
        <div class="ima">
          <img class="imagen" src="../composition.jpg" alt="" />
          <img class="addphoto" src="../picture.png" alt="" />
          <div class="grid">
            <img class="Icon" src="../electricity.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Electricidad"
              type="checkbox"
            />
            <img class="Icon" src="../cutlery.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Desayuno"
              type="checkbox"
            />
            <img class="Icon" src="../wifi.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Wifi"
              type="checkbox"
            />
          </div>
          <div class="grid">
            <img class="Icon" src="../bbq.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="BBQ"
              type="checkbox"
            />
            <img class="Icon" src="../bonfire.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Fogata"
              type="checkbox"
            />
            <img class="Icon" src="../shower.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Ducha"
              type="checkbox"
            />
          </div>
          <div class="grid">
            <img class="Icon" src="../dog.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Aceptamos Mascotas"
              type="checkbox"
            />
            <img class="Icon" src="../tap.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Agua Caliente"
              type="checkbox"
            />
            <img class="Icon" src="../parking-sign.png" alt="" />
            <input
              class="cuadrado"
              id="checkbox"
              value="Parqueadero disponible"
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <input class="Ingresar" @click="RegistroCamp" type="button" value="Registra tu Camping" />
    </div>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>


<script >
import swal from "sweetalert";
export default {
  name: "RegistroCamp",
  data() {
    return {
      Regiscamp: {
        nombre: "",
        ciudad: "",
        direccion: "",
        telefono: "",
        servicios: "null",
        descripcion: "",
        imagen: null,
        vendedorId: this.idUser(),
      },
    };
  },
  methods: {
    idUser: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.id;
    },
        async RegistroCamp() {
      let respuesta = await this.$http.post("/campings/", this.Regiscamp);
      console.log(respuesta.data);
      swal("Registro exitoso", "", "success");
      this.$router.push("/ProfileVendor");

      try {
      } catch (error) {
        swal("Oops!", "Registro fallido, vuelva a intentarlo", "error");
      }
    },
  },
};
</script>


<style scoped>
.ima {
  display: flex;
  flex-direction: column;
  object-fit: cover;
  align-items: center;
  padding-bottom: 10px;
}
.Icon {
  margin-right: 10px;
  margin-left: 15px;
  width: 35px;
  height: 35px;
}
.grid {
  display: flex;
  margin: 10px;
  align-items: baseline;
}
.cuadrado {
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 3px solid #4c922c;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 15px;
}
.addphoto {
  margin-top: 20px;
  width: 50px;
  height: 50px;
  margin-bottom: 50px;
}
.Bigcont {
  display: flex;
  justify-content: center;
}
.Ingresar {
  background-color: #4c922c;
  height: 35px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
  border: none;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 250px;
}
.Contenedor {
  width: 1026px;
  height: 594px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 0px;
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
.Nombreima {
  width: 350px;
  height: 44px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #000000;
  padding-bottom: 30px;
  justify-content: center;
}
.aux {
  display: flex;
  flex-direction: row;
  margin: 0px;
  align-content: baseline;
  justify-content: space-around;
}

.imagen {
  width: 350px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;
  object-fit: cover;
}
.user {
  display: flex;
  min-width: 550px;
  min-height: 55.11px;
  background: #ffffff;
  border: 1px solid #4c922c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 35px;
  align-content: center;
  align-items: center;
}
.user1 {
  display: flex;
  min-width: 550px;
  min-height: 55.11px;
  background: rgba(179, 226, 150, 0.3);
  border: 1px solid #4c922c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.user2 {
  display: flex;
  min-width: 550px;
  min-height: 133px;
  background: #ffffff;
  border: 1px solid #4c922c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 35px;
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
  width: 550px;
  border: none;
  background: rgba(0, 0, 0, 0);
  padding: 20px;
}
.userinput::placeholder {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
}
.userinput1 {
  min-width: 550px;
  border: none;
  background: rgba(0, 0, 0, 0);
  padding: 20px;
  overflow: hidden;
  resize: none;
}

.userinput1::placeholder {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  border: none;
}
.userinput:focus {
  outline: none;
}
.userinput1:focus {
  outline: none;
}
</style>