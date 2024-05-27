import { defineClientConfig } from "vuepress/client";
import Audio from './components/Audio.vue';
// import Video from './components/Video.vue'
// import PDView from './components/PDView.vue'

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
      app.component("Audio", Audio);
      // app.component("Video",Video);
      // app.component("PDView",PDView);
    },
  });