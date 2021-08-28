<template>
  <div class="Bigcontenedor">
    <div class="perfil">
      <p class="Letra">Tu Perfil</p>
      <div class="carta">
        <p class="bold">Nombre</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProfileVendor",
  props: {},
};
</script>



<style scoped>
.Bigcontenedor {
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  padding-top: 40px;
  height: 324px;
}
.bold {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

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
  margin-bottom: 25px;
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
  padding: 40px;
}
</style>