<template>
  <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <router-view/>
      </v-main>
  
      <v-footer app>
      </v-footer>
    </v-app>
  </v-app>
</div>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  watch: {},
  mounted() {
  },
  methods: {
    route(path) {
      router.push(path);
    },
  },
}
</script>

<style>
:root {
  --gray-1: #f6f6f6;
  --gray-2: #bfbfbf;
  --gray-3: #8c8c8c;
  --gray-4: #5b5b5b;
  --gray-5: #2f2f2f;
  --green: #005a34;
}
body {
  line-height: 1.7;
  color: var(--gray-1);
  font-weight: 400;
  font-size: 1rem;
}
::-moz-selection {
  background: var(--gray-5);
  color: var(--gray-1);
}
::selection {
  background: var(--gray-5);
  color: var(--gray-1);
}
.h1,
.h2,
.h3,
.h4,
.h5,
h1,
h2,
h3,
h4,
h5 {
  font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  color: var(--gray-5);
}
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a:hover {
  text-decoration: none;
}
p {
  color: var(--gray-4);
}
.btn {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  padding: 6px 20px;
}
.btn:hover,
.btn:active,
.btn:focus {
  outline: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btn.btn-black {
  border-width: 2px;
  border-color: #000;
  background: #000;
  color: #fff;
}
.btn.btn-black:hover {
  color: #000;
  background-color: transparent;
}
.btn.btn-black.btn-outline-black {
  color: #000;
  background-color: transparent;
}
.btn.btn-black.btn-outline-black:hover {
  border-color: #000;
  background: #000;
  color: #fff;
}
.btn.btn-white {
  border-width: 2px;
  border-color: #fff;
  background: #fff;
  color: #000;
}
.btn.btn-white:hover {
  color: #fff;
  background-color: transparent;
}
.btn.btn-white.btn-outline-white {
  color: #fff;
  background-color: transparent;
}
.btn.btn-white.btn-outline-white:hover {
  border-color: #fff;
  background: #fff;
  color: #000;
}
</style>