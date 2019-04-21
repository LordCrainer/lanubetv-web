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
        titulo: "NACIONALES Y LOCALES",
        fondo: require('./../../assets/Canales/Nacionales_fondo.jpg'),
        canales: [{
            titulo: "Ecuavisa",
            src: require('./../../assets/Canales/Nacionales/ecuavisa_icon.png')
          },
          {
            titulo: "GamaTv",
            src: require('./../../assets/Canales/Nacionales/gama_icon.png')
          },
          {
            titulo: "RTS",
            src: require('./../../assets/Canales/Nacionales/rts.png')
          },
          {
            titulo: "TCTelevision",
            src: require('./../../assets/Canales/Nacionales/tcTelevision.jpg')
          },
          {
            titulo: "Teleamazonas",
            src: require('./../../assets/Canales/Nacionales/teleamazonas_icon.png')
          },
          {
            titulo: "Televicentro",
            src: require('./../../assets/Canales/Nacionales/televicentro.jpg')
          }, {
            titulo: "OromarTV",
            src: require('./../../assets/Canales/Nacionales/oromarTv.png')
          }, {
            titulo: "Ambavision",
            src: require('./../../assets/Canales/Nacionales/ambavision.png')
          }, {
            titulo: "CanalTV",
            src: require('./../../assets/Canales/Nacionales/canaleTv.png')
          }, {
            titulo: "CaravanaTV",
            src: require('./../../assets/Canales/Nacionales/caravanaTV.jpg')
          }, {
            titulo: "Ecoteltv",
            src: require('./../../assets/Canales/Nacionales/ecotelTv_loja.png')
          }, {
            titulo: "Ecuavision",
            src: require('./../../assets/Canales/Nacionales/ecuavision.jpg')
          }, {
            titulo: "Manavision",
            src: require('./../../assets/Canales/Nacionales/manavision.png')
          }, {
            titulo: "Telerama",
            src: require('./../../assets/Canales/Nacionales/telerama.png')
          }, {
            titulo: "TVSultana",
            src: require('./../../assets/Canales/Nacionales/TVSultana.png')
          }, {
            titulo: "Univisa",
            src: require('./../../assets/Canales/Nacionales/univisa.png')
          }
        ]
      },
      Data_Internacionales: {
        titulo: "INTERNACIONALES",
        fondo: require('./../../assets/Canales/Internacional_fondo.jpg'),
        canales: [{
          titulo: "CableVision",
          src: require('./../../assets/Canales/Internacionales/cableVision.png')
        }, {
          titulo: "Fox Channel",
          src: require('./../../assets/Canales/Internacionales/FoxChannel.png')
        }, {
          titulo: "Disney Channel",
          src: require('./../../assets/Canales/Internacionales/disneyChannel.png')
        },{
          titulo: "Grupo Discovery",
          src: require('./../../assets/Canales/Internacionales/grupoDiscovery.png')
        },{
          titulo: "Claro Sports",
          src: require('./../../assets/Canales/Internacionales/claroSports.png')
        },{
          titulo: "ESPN Directv",
          src: require('./../../assets/Canales/Internacionales/espn.png')
        },{
          titulo: "Nat Geo",
          src: require('./../../assets/Canales/Internacionales/natgeo.png')
        },{
          titulo: "Cinecanal",
          src: require('./../../assets/Canales/Internacionales/cinecanal.png')
        },{
          titulo: "The Film Zone",
          src: require('./../../assets/Canales/Internacionales/thefilmzone.png')
        },{
          titulo: "FX",
          src: require('./../../assets/Canales/Internacionales/FX.jpg')
        },{
          titulo: "fox Life",
          src: require('./../../assets/Canales/Internacionales/foxlife.jpg')
        },{
          titulo: "Discovery Channel",
          src: require('./../../assets/Canales/Internacionales/discoveryChannel.jpg')
        },{
          titulo: "TLC",
          src: require('./../../assets/Canales/Internacionales/tlc.png')
        },{
          titulo: "Animal Planet",
          src: require('./../../assets/Canales/Internacionales/animalPlanet.png')
        },{
          titulo: "Universal Channel",
          src: require('./../../assets/Canales/Internacionales/universal-channel.png')
        },{
          titulo: "Discovery Kids",
          src: require('./../../assets/Canales/Internacionales/discoveryKids.png')
        },{
          titulo: "H&H",
          src: require('./../../assets/Canales/Internacionales/hyh.png')
        },{
          titulo: "ID",
          src: require('./../../assets/Canales/Internacionales/ID_discovery.png')
        }]
      }


    }
  }
}
</script>
