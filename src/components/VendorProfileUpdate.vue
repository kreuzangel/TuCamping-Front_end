<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <p class="Bien">Actualiza tus datos</p>
      <div class="aux">
        <div class="formulario">
          <div class="user">
            <input
              v-model="update.nombres"
              id="nombre"
              class="userinput"
              type="text"
              placeholder="Nombres"
            />
          </div>
          <div class="user">
            <input
              v-model="update.apellidos"
              id="apellido"
              class="userinput"
              type="text"
              placeholder="Apellidos"
            />
          </div>
          <div class="user">
            <input
              class="userinput"
              v-model="update.telefono"
              id="telefono"
              type="number"
              placeholder="Teléfono"
            />
          </div>
          <div class="user">
            <input
              class="userinput"
              v-model="update.email"
              id="email"
              type="email"
              placeholder="Correo"
            />
          </div>
          <div class="user">
            <input
              id="contra1"
              class="userinput"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div class="user">
            <input
              v-model="update.password"
              id="contra2"
              class="userinput"
              type="password"
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>
        <div class="ima">
          <img class="imagen" src="../Outdoor.png" alt="" />
          <input
            class="Ingresar"
            @click="updateVendor()"
            type="button"
            value="Actualizar"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";

export default {
  name: "VendorProfileUpdate",
  data() {
    return {
      update: {
        email: this.correo(),
        nombres: this.nombre(),
        apellidos: this.apellido(),
        telefono: this.telefono(),
        username: this.username(),
      },
    };
  },
  computed: {
    comprobacion: function () {
      pass1 = document.getElementById("contra1");
      pass2 = document.getElementById("contra2");
      if (pass1.value != pass2.value) {
        swal("Oops!", "Contraseñas no coinciden, intente de nuevo", "error");
      }
    },
  },
  methods: {
    idUser: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.id;
    },
    nombre: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.nombres;
    },
    apellido: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.apellidos;
    },
    correo: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.email;
    },
    telefono: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.telefono;
    },
    username: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.username;
    },
    async updateVendor() {
      let respuesta = await this.$http.put("/actualizar/usuario/" + this.idUser() + "/", this.update);
      console.log(respuesta.data);
      let usuario = respuesta.data;
      localStorage.removeItem('usuario');
      localStorage.setItem('usuario', JSON.stringify(usuario));
      swal("Actualizacion exitosa", "", "success");
      this.$router.push("/ProfileVendor");
      try {
      } catch (error) {
        swal("Oops!", "Actualizacion fallida, vuelva a intentarlo", "error");
      }
    },
  },
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
  margin-bottom: 5px;
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
  margin-bottom: 40px;
  margin-top: 20px;
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
  width: 550px;
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>