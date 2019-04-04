<style scoped>

.Canales {
    height: 100%;
    background-color: rgb(255, 255, 255);
}

</style>

<template>

<section class="Canales">
    <v-layout row wrap justify-space-around fill-height>
        <v-flex xs12 >
            <v-card-text flat class="display-1 font-weight-bold  pt-5">
                {{ items.titulo }}
            </v-card-text>
        </v-flex>
        <v-flex xs12>
            <carousel :items="items.canales" height="100%" style="box-shadow: 0px 0px;">
                <v-container grid-list-xl slot="contenido" slot-scope="canales" style="max-width: 1200px;">
                    <v-layout row wrap fill-height align-center justify-center class="pb-5 mx-auto">
                        <v-flex v-for="(canales,index) in canales.item.clientes" :key="canales.titulo+index" xs4 sm4 md3 lg3>
                            <v-card  height="100%" width="100%" hover style="min-width: 80px;  text-align: center; max-width: 125px; max-height: 125px; border-radius: 50%; " aspect-ratio="1" class="ma-auto pa-auto" color="transparent">
                                <v-img contain :src="canales.src" alt="canales" height="inherit" aspect-ratio="1" class="pa-0 mx-auto">
                                </v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </carousel>
        </v-flex>
    </v-layout>
</section>

</template>

<script>

import carousel from "./../../componentes/UI/carousel";
export default {
    props: ["items"],
    components: {
        carousel
    }
};

</script>
