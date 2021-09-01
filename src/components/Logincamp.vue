<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <p class="Bien">Bienvenido</p>
      <div class="aux">
        <div class="ima">
          <img class="imagen" src="../Camping.png" alt="" />
        </div>
        <div class="formulario">
          <div class="user">
            <img class="imagen2" src="../waiter.png" alt="" />
            <input
              v-model="login.username"
              class="userinput"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div class="user">
            <img class="imagen3" src="../llave.png" alt="" />
            <input
              v-model="login.password"
              class="userinput"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <p class="olvidar"><router-link to="/Olvidar">¿Olvidó su Contraseña?</router-link></p>
          <div>
            <input
              class="Ingresar"
              @click="iniciarsesion"
              type="button"
              value="Ingresar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';

export default {
  name: "Logincamp",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async iniciarsesion() {
      try {
        let respuesta = await this.$http.post("/login/", this.login);
        console.log(respuesta.data)
        let token = respuesta.data.token;
        let usuario = respuesta.data.user;
        if (token){
          localStorage.setItem('token',token)
          localStorage.setItem('usuario', JSON.stringify(usuario))
        }
        swal("Bienvenido", "", "success");
        this.$router.push('/ProfileVendor')
      } catch (error) {
        swal("Oops!", "Credenciales incorrectas", "error");
      }
    },
  },
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
  margin-top: 30px;
}
.olvidar a{
  color:black;
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
  font-size: 48px;
  line-height: 59px;
  color: #4c922c;
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
}

.aux {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  margin: 0px;
  padding: 0px;
}

.imagen {
  width: 370px;
  height: 410px;
  margin-bottom: 50px;
}

.imagen2 {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.imagen3 {
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}

.user {
  width: 270px;
  height: 39px;
  display: flex;
  align-items: center;
  border-bottom: solid 2px black;
  margin-top: 100px;
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
  width: 550px;
}
.userinput::placeholder {
  color: black;
  font-family: "Montserrat";
  font-weight: bold;
}

.userinput:focus {
  outline: none;
}
</style>