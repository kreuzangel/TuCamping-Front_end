<template>
  <div class="vista">
    <StockHeader />
    <ul>
      <li v-for="item in city" :key="item">
        <StockCamp :camp="item" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import swal from "sweetalert";
import StockHeader from "@/components/StockHeader.vue";
import Barra from "@/components/Barra.vue";
import StockCamp from "@/components/StockCamp.vue";

export default {
  name: "Stock",
  components: {
    StockHeader,
    StockCamp,
    Barra,
  },
  data() {
    return {
      city: [],
    };
  },
  mounted() {
    var ciudad = localStorage.getItem("ciudad");
    let url = "http://127.0.0.1:8000/mostrarcampingciudad/" + ciudad + "/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => (this.city = data));
  },
};
</script>
<style scoped>
.vista {
  display: block;
}
</style>