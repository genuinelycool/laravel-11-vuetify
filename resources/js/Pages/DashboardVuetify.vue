<script setup>
import { ref } from 'vue';
import { mdiAccount, mdiChevronUp, mdiChevronDown } from '@mdi/js';
const drawer = ref(null);
const show = ref(false);
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
                    <div v-for="n in 3" :key="n" class="v-col-12 v-col-md-4">

                        <v-card class="mx-auto" max-width="344">
                            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover></v-img>

                            <v-card-title>
                                Top western road trips
                            </v-card-title>

                            <v-card-subtitle>
                                1,000 miles of wonder
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="orange-lighten-2" text="Explore"></v-btn>

                                <v-spacer></v-spacer>

                                <v-btn :icon="show ? mdiChevronUp : mdiChevronDown" @click="show = !show"></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians, he promised more than he could deliver.
                                        You won't have time for sleeping, soldier, not with all the bed making you'll be
                                        doing. Then we'll go with that data file! Hey, you add a one and two zeros to
                                        that or we walk! You're going to do his laundry? I've got to find a way to
                                        escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </div>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
