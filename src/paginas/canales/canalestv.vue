<style scoped>



</style>

<template >

<div>
    <NacionalYLocal :items="Data_NacionalesYLocales"></NacionalYLocal>
    <Internacional :items="Data_Internacionales"></Internacional>
</div>

</template>

<script>

import NacionalYLocal from "./nacionalesYlocales.vue"
import Internacional from "./internacionales.vue"
export default {
    components: {
        NacionalYLocal,
        Internacional
    },
    data() {
        return {
            Data_NacionalesYLocales: {
                titulo: "Nacionales y Locales",
                fondo: require('./../../assets/Canales/Nacionales_fondo.jpg'),
                canales: [{
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                },
                {
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                },
                {
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                },
                {
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                },
                {
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                }]
            },
            Data_Internacionales: {
                titulo: "Internacional",
                fondo: require('./../../assets/Canales/Internacional_fondo.jpg'),
                canales: [{
                    titulo: "Ecuavisa",
                    src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
                }, {
                    titulo: "GamaTv",
                    src: require('./../../assets/Canales/Nacionales/gama_icon.png')
                }, {
                    titulo: "Teleamazonas",
                    src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
                },]
            }


        }
    }
}

</script>
