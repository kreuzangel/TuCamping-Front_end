<template>
  <div class="Profile">
    <StockHeader />
    <p class="Bien">Bienvenido Pepito!</p>
    <ProfileVendor />
  </div>
</template>
<script>
// @ is an alias to /src
import StockHeader from "@/components/StockHeader.vue";
import ProfileVendor from "@/components/ProfileVendor.vue";
export default {
  name: "Profile",
  components: {
    StockHeader,
    ProfileVendor,
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
</style>