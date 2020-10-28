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
          <v-list-item
            v-for="item in items"
            :key="item.text"
            v-on:click="route(item.path)"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
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
    items: [],
  }),
  watch: {},
  mounted() {
    this.items = [
      { icon: 'mdi-storefront', text: 'Home', path: '/' },
      { icon: 'mdi-devices', text: 'Products', path: '/products' },
      { icon: 'mdi-briefcase', text: 'Services', path: '/services' },
      { icon: 'mdi-map-search', text: 'Stores', path: '/stores' },
      { icon: 'mdi-comment-multiple', text: 'Reviews', path: '/reviews' },
      { icon: 'mdi-youtube', text: 'Videos', path: '/videos' },
      { icon: 'mdi-calendar-month', text: 'Contact', path: '/contact' },
    ];
  },
  methods: {
    route(path) {
      router.push(path);
    },
  },
};
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
.text-black {
  color: var(--gray-5);
}
#app {
  font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}
.form-control {
  height: 43px;
}
.form-control:active,
.form-control:focus {
  border-color: var(--green);
}
.form-control:active,
.form-control:focus,
.form-control:hover {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.site-section {
  padding: 2.5em 0;
  margin: 0px 0px;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
.section-sub-title {
  font-size: 13px;
  color: var(--gray-4);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
}
.section-title {
  color: var(--gray-5);
  font-size: 40px;
  font-weight: 900;
}
@media (max-width: 991.98px) {
  .section-title {
    font-size: 30px;
  }
}
</style>
