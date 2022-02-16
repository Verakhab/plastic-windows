<template>
  <div class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
:root {
  --main-background: #383838;
  --main-color: #fff;
  --auxiliary-color: #b9b9b9;
  --line-color: #9d9d9d;
  --footer-color: #898989;
  --buttons-color: #33c5f3;
  --buttons-radius: 3px;
  --buttons-height: 50px;
  --main-font: Geometria, Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  min-width: 375px;
  max-width: 1440px;
}
.app {
  font-family: var(--main-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: var(--main-background);
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
