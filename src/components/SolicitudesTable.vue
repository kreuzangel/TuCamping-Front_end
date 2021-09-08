<template>
	<div id="app" class="ui container">
  <vuetable
    ref="vuetable"
    :fields="['nombre', 'apellido', 'correo', 'telefono','fechaIni','fechaFin','numPersonas']"
    :api-mode="false"
    :data="this.campi"
  ></vuetable>
 </div>
</template>

<script>
import Vuetable from "vuetable-2";

export default {
  name: "SolicitudesTable",
  components: {
    Vuetable,
  },
  data() {
    return {
      campi: [],
    };
  },
  mounted() {
      let url =
        "http://127.0.0.1:8000/mostrarReservIdVend/" + this.userid() + "/";
      fetch(url).then((res) => res.json())
      .then(data => this.campi = data);
  },
  methods:{
  userid: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.id;
    },
  }

};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button.ui.button {
  padding: 0px 0px 0px 0px;
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>