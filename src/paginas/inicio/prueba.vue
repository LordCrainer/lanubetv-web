<template lang="html">
  <v-img src="https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/MRgO-logo_lanubetv.png" style="border: 1px solid red;">
  <v-container grid-list-xl fill-height >
    <v-layout row wrap  align-center justify-space-around >
          <v-flex xs12 sm12 md6>
            <v-card>
              <v-card-text>
                <h2>MI CARTA</h2>
              </v-card-text>
              <v-card-actions>
             <v-btn flat color="orange">Share</v-btn>
             <v-btn flat color="orange">Explore</v-btn>
           </v-card-actions>
            </v-card>
              </v-flex>

        <v-flex xs12 sm12 md6>
          <v-card>
            <v-card-text>
              <h2>MI CARTA</h2>
            </v-card-text>
            <v-card-actions>
           <v-btn flat color="orange">Share</v-btn>
           <v-btn flat color="orange">Explore</v-btn>
         </v-card-actions>
          </v-card>
        </v-flex>


    </v-layout>
  </v-container>
  </v-img>
</template>

<script>
export default {
  props: ["items"]
}
</script>

<style lang="css" scoped>
</style>
