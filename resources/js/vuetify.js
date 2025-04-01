import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// Theme
const devnightly = {
    colors : {
        primary: "#673AB7",
        secondary: "#424242",
        accent: "#82B1FF",
    }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
      defaultTheme: "devnightly",
      themes: {
          devnightly
      },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  }
});

export default vuetify;
