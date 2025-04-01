<script setup>
    import { ref } from 'vue';
    import { mdiAccount } from '@mdi/js';
    const drawer = ref(null);
</script>

<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Application</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-container>
            <v-row>
                <div v-for="n in 3" class="v-col-12 v-col-md-4">
                    <v-card>
                        <v-card-text>
                            this is vuetify card
                            <v-icon :icon="mdiAccount"></v-icon>
                        </v-card-text>
                    </v-card>
                </div>
            </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
