<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <v-container class="py-5">
            <v-row>
                <div class="v-col-12">
                    This is Users
                </div>
            </v-row>
        </v-container>

    </AuthenticatedLayout>
</template>
