// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    devServer: {
        port: 8050,
        // host: '0.0.0.0',
    },
    modules: ['nuxt-icons', "@nuxt/image"],
    css: ['~/assets/css/atoms/__atoms.css'],
    image: {
        dir: 'assets/img'
    },
})