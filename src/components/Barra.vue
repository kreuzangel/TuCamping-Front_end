<template>
<div class="Contenedor">
<nav class="navbar" >
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="¿Adónde acampas?" aria-label="Search">
    <div class="vl"></div>
    <input class="form-control mr-sm-2" type="search" placeholder="Fecha de entrada" aria-label="Search">
    <div class="vl"></div>
    <input class="form-control mr-sm-2" type="search" placeholder="Fecha de salida" aria-label="Search">
    <div class="vl"></div>
    <input class="form-control mr-sm-0" type="search" placeholder="N° Campistas" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src="../loupe.png" width="50" height="50"></button>
  </form>
</nav>
</div>
</template> 
<script>
export default {
  name: 'Barra',
}
</script>

<style scoped>

.Contenedor {
    display: flex;
    justify-content: center;
    background-color: white;

}
.navbar {
  padding: 5px 0px 5px 0px;
  /* border: solid; */
  border-left: solid;
  border-right: solid;
  border-width: 10px;
  border-color: #4c922c; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}


.form-control{
  border:none;
  font-weight: bold;
  padding-left: 20px; 

  }
.form-control::placeholder {
  color:black;
  font-family: 'Montserrat';
  text-align: center;

}
.btn {
  border: none;
}
.vl {
  border-left: 3px solid #4c922c;
  height: 70px;
}
</style>