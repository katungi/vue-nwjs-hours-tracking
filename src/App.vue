<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-button v-b-toggle.sidebar-1>Main Menu</b-button>
      <b-navbar-brand href="#">Hour Logger</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" isNav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>  
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item href="/#/">
            Hours Log
          </b-list-group-item>
          <b-list-group-item href="/#/projects">
            Projects
          </b-list-group-item>
        </b-list-group>
        <div class="dropdown-divider"></div>
        <b-list-group>
          <b-list-group-item href="/">
            Exports
          </b-list-group-item>
          <b-list-group-item href="/">
            Settings
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
