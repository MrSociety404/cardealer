export default {
  // Target: https://go.nuxtjs.dev/config-target
  // router: {
  //   base: '/cardealer/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sunrise Autos',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Concession automobile de la cité du vice, catalogue - recrutements. Développeur : MrSociety404' 
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://cardealer.mrsociety404.com`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Concession automobile de la cité du vice, catalogue - recrutements. Développeur : MrSociety404',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/cg9VPxx.png'
      },
      {
        hid: 'oh:title',
        name: 'og:title',
        content: 'Sunrise Autos'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // proxy: true
  }
  
}
