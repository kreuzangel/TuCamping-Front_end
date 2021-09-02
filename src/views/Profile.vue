<template>
  <div class="Profile">
    <StockHeader />
    <p class="Bien">Bienvenid@ {{ userid }}!</p>
    <ProfileVendor />
    <p class="Letra">Tus Campings</p>
    <ul>
      <li v-for="item in campi" :key="item.name"><CardCampVendor /></li>
    </ul>
    <button class="btn btn-outline-success" @click="add" type="submit">
      <img src="../mas.png" width="50" height="50" />
    </button>
    <p class="Letra">Tus Solicitudes</p>
    <SolicitudesVendor />
  </div>
</template>
<script>
// @ is an alias to /src
import StockHeader from "@/components/StockHeader.vue";
import ProfileVendor from "@/components/ProfileVendor.vue";
import CardCampVendor from "@/components/CardCampVendor.vue";
import SolicitudesVendor from "@/components/SolicitudesVendor.vue";
export default {
  name: "Profile",
  components: {
    StockHeader,
    ProfileVendor,
    CardCampVendor,
    SolicitudesVendor,
  },
  data() {
    return {
      campi: [
        {
          name: "prueba1",
        },
        {
          name: "prueba2",
        },
        {
          name: "prueba3",
        },
        {
          name: "prueba4",
        },
      ],
    };
  },
  methods: {
    add() {
      return this.$router.push("/Regiscamp");
    },
  },
  computed: {
    userid: function () {
      var arr = JSON.parse(localStorage.getItem("usuario"));
      return arr.username;
    },
  },
};
</script>
<style scoped>
.Bien {
  position: absolute;
  top: 8%;
  color: #fff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  display: flex;
  right: 5%;
}
.Letra {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  color: #4c922c;
  padding-left: 40px;
  margin-bottom: 0px;
  margin-left: 40px;
}
</style>