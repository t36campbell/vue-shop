import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#04724d',
        secondary: '#586F7C',
        accent: '#B8DBD9',
        info: colors.grey.darken4,
      },
      light: {
        primary: '#586F7C',
        secondary: '#04724d',
        accent: '#B8DBD9',
        info: colors.grey.lighten4,
      },
    },
  },
});
