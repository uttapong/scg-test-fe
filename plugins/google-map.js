import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCQWpAtVowR7C1BRlml8_LeRMWSpKUZ1HQ",
    libraries: "places,drawing,visualization"
  }
});
