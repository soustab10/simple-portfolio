import { createApp } from "vue";
import App from "./App.vue";

// router
import router from "./router";

// bootstrap bundle
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import { createMetaManager, defaultConfig } from "vue-meta";
const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: "meta", nameless: true },
});

// font aswesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedinIn, faGithub, faFileLines, faInstagram, faTwitter);

createApp(App)
  .use(bootstrap)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(metaManager)
  .mount("#app");
