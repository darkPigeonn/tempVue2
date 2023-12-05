// https://v3.nuxtjs.org/api/configuration/nuxt.config

// import path from 'path';

// const getPostRoutes = async () => {
//   const endpoint = 'https://api.imavi.org/imavi/articles/get-all';
//   const response = await fetch(endpoint, {
//     headers: {
//       Id: '6163b0c663bd513e8b3b8553',
//       Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
//       Partner: 'cim',
//     },
//   });
//   let articles = await response.json();

//   let slugs = articles.map((each) => {
//     return '/articles/' + each.slug;
//   });
//   console.log(slugs);
//   return slugs;
// };

// export default defineNuxtConfig({
//   alias: {
//     components: path.resolve('components'),
//   },
//   hooks: {
//     async 'nitro:config'(nitroConfig) {
//       if (nitroConfig.dev) {
//         return;
//       }
//       let slugs = await getPostRoutes();
//       nitroConfig.prerender.routes.push(...slugs);
//       console.log('ini');
//       return;
//     },
//   },
// });
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['public/assets/css/style.css', '@fortawesome/fontawesome-free/css/all.css'],
});
