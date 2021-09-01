<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/Registro"></router-link>
      <router-link to="/Login"></router-link> 
      <router-link to="/Olvidar"></router-link>
      <router-link to="/Solicitar"></router-link>
      <router-link to="/Stock"></router-link>
      <router-link to="/Regiscamp"></router-link>
      <router-link to="/ProfileVendor"></router-link>
      <router-link to="/VendorUpdate"></router-link>
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
