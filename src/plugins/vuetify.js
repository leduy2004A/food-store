// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";
// Vuetify
// eslint-disable-next-line no-unused-vars
import { createVuetify } from "vuetify";
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: "#212121",
    cwhite: "#FFFFFF",
    corange: "#FF6E40",
    cblack: "#000000",
    cred: "red",
  },
};
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
});
