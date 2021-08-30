<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/Login">Login</router-link> 
      <router-link to="/Registro">Registro</router-link>
      <router-link to="/Olvidar">Olvidar</router-link>
      <router-link to="/Solicitar">Solicitar</router-link>
      <router-link to="/Stock">Stock</router-link>
      <router-link to="/Regiscamp">Regiscamp</router-link>
      <router-link to="/ProfileVendor">Profile</router-link>
      <router-link to="/VendorUpdate">VendorUpdate</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
}

#nav {
  padding: 30px;
  position: absolute;
  left: 1000px;
  z-index: 2;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
