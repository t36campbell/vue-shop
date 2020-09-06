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
          <v-list-item>
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-brightness-4</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">
              <v-switch
                class="toggle"
                v-model="$vuetify.theme.dark"
              ></v-switch>
            </v-list-item-title>
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
      { icon: 'mdi-trending-up', text: 'Home', path: '/' },
      { icon: 'mdi-youtube-subscription', text: 'Products', path: '/products' },
      { icon: 'mdi-image-multiple', text: 'Services', path: '/services' },
      { icon: 'mdi-image-multiple', text: 'Stores', path: '/stores' },
      { icon: 'mdi-image-multiple', text: 'Reviews', path: '/reviews' },
      { icon: 'mdi-store', text: 'Videos', path: '/videos' },
      { icon: 'mdi-cog', text: 'Contact', path: '/contact' },
    ];
  },
  methods: {
    route(path) {
      router.push(path);
    },
  },
};
</script>
