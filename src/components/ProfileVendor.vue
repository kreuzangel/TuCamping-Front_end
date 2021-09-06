<template>
  <div class="Bigcontenedor">
    <div class="perfil">
      <p class="Letra">Tu Perfil</p>
      <div class="carta">
        <p class="bold">Nombre:</p>
        <p class="nobold">{{ nombre }}</p>
        <p class="bold">Correo:</p>
        <p class="nobold">{{ correo }}</p>
        <p></p>
        <p class="bold">Apellido:</p>
        <p class="nobold">{{ apellido }}</p>
        <p class="bold">Telefono:</p>
        <p class="nobold">{{ telefono }}</p>
        <p></p>
        <p class="bold">Usuario:</p>
        <p class="nobold">{{ usuario }}</p>
        <p></p>
        <div class="bot">
          <input
            class="Editar"
            type="button"
            value="Editar"
            @click="update()"
          />
          <input
            @click="logOut()"
            class="Cerrar"
            type="button"
            value="Cerrar sesión"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProfileVendor",
  computed: {
    nombre: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.nombres;
    },
    apellido: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.apellidos;
    },
    usuario: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.username;
    },
    correo: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.email;
    },
    telefono: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.telefono;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      this.$router.push("/");
    },
    update() {
      this.$router.push('/VendorUpdate')
    },
  },
};
</script>



<style scoped>
.Bigcontenedor {
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  padding-top: 40px;
  min-height: 324px;
}
.bold {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  padding: 15px;
}
.bot {
  display: flex;
  justify-content: flex-end;
}
.Cerrar {
  background-color: #d95d51;
  width: 178px;
  height: 35px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 20px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  border: none;
  margin-left: 10px;
}
.Editar {
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
  margin-right: 10px;
}

.nobold {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
}
.perfil {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.Letra {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  color: #4c922c;
  margin-left: 40px;
  margin-bottom: 0px;
}
.carta {
  width: 1200px;
  min-height: 250px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border: solid;
  border-color: #4c922c;
  border-width: 1px;
  margin-left: 40px;
  display: grid;
  grid-template-columns: 13% 32% 15% 35% 20%;
  padding: 20px 20px 20px 40px;
  text-align: left;
  align-items: center;
  margin: 40px;
}
</style>