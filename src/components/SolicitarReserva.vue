<template>
  <div class="Bigcont">
    <div class="Contenedor">
      <p class="Bien">Solicita tu reserva</p>
      <div class="aux">
        <div class="formulario">
          <div class="user1">
            <input class="userinput" type="text" placeholder="Nombre" v-model="Reserv.nombre"/>
          </div>
          <div class="user">
            <input class="userinput" type="text" placeholder="Apellido" v-model="Reserv.apellido"/>
          </div>
          <div class="user1">
            <input class="userinput" type="email" placeholder="Email" v-model="Reserv.correo"/>
          </div>
          <div class="user">
            <input
              class="userinput"
              type="number"
              placeholder="Celular"
              v-model="Reserv.telefono"
            />
          </div>
          <div class="user1">
            <input
              class="userinput"
              type="number"
              placeholder="N° de Campistas"
              v-model="Reserv.numPersonas"
            />
          </div>
          <div class="user">
            <input
              class="userinput"
              type="date"
              placeholder="Fecha de Ingreso"
              v-model="Reserv.fechaIni"
            />
          </div>
          <div class="user1">
            <input
              class="userinput"
              type="date"
              placeholder="Fecha de Salida"
              v-model="Reserv.fechaFin"
            />
          </div>
        </div>
        <div class="ima">
          <p class="Nombreima">Nombre Camping</p>
          <img class="imagen" src="../Noche.jpg" alt="" />
          <input class="Ingresar" type="button" value="Enviar Solicitud" @click="reservar"/>
        </div>
      </div>
    </div>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>
<script>
export default {
  name: "SolicitarReserva",
   data() {
    return {
      campin:{

      },
      Reserv: {
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "", 
        fechaIni: "",
        fechaFin: "",
        numPersonas: "",
        campingId: this.idCamp(),
      },
    };
  },
  mounted(){

  },
  methods: {
    idCamp: function () {
      let id = this.$route.params.id; 
      return id;
    },
    async reservar() {
      let respuesta = await this.$http.post("/reservas/", this.Reserv);
      console.log(respuesta);
      swal("Solicitud exitosa", "", "success");
      this.$router.push("/");
      // let camp = await this.$http.get("/campings/");
      try {
      } catch (error) {
        swal("Oops!", "Solicitud Fallida, vuelva a intentarlo", "error");
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
  object-fit: cover;
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
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 45px;
  width: 250px;
}
.Contenedor {
  width: 1200px;
  height: 754px;
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
  align-items: center;
  justify-content: space-evenly;
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
  margin: 17px;
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
  width:550px ;
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

.userinput:focus {
  outline: none;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>