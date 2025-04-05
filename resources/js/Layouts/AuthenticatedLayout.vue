<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" color="black">
            <div class="w-100 text-center py-10">
                <v-avatar class="mx-auto" size="100">
                    <v-img :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"></v-img>
                </v-avatar>
            </div>
            <v-list nav>
                <div v-for="item in sideNavigation" :key="item.title">
                    <v-list-group v-if="item.subs" :value="item.title">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon"></v-list-item>
                        </template>
                        <v-list-item v-for="(sub, i) in item.subs" :key="i" :title="sub.title" :value="sub.title" @click="() => openPage(sub.path)" style="padding-left: 12px !important;">
                            <template v-slot:prepend>
                                <v-icon size="16" :icon="sub.icon"></v-icon>
                            </template>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item v-else :title="item.title" :prepend-icon="item.icon" @click="() => openPage(item.path)"></v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Application</v-app-bar-title>
            <v-icon :icon="mdiAccount"></v-icon>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { mdiAccount, mdiChevronUp, mdiChevronDown, mdiViewDashboard, mdiCog } from '@mdi/js';
import { router } from '@inertiajs/vue3';

// Navigation Drawer
const drawer = ref(null);
const show = ref(false);

const sideNavigation = ref([
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: mdiViewDashboard
    },
    {
        title: "Settings",
        icon: mdiCog,
        subs: [
            {
                title: "Users",
                path: "/admin/users",
                icon: mdiAccount,
            }
        ]
    },

]);

const openPage = (path) => {
    router.get(path);
}
</script>
