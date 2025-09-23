<script setup>
const isLoggedIn = true
</script>

<template>
<v-app-bar color="teal-lighten-1">
    <v-app-bar-title>KKM Dishes</v-app-bar-title>

    <v-btn to="/"> Home</v-btn>
    <v-btn to="/menu">Menu</v-btn>
    <v-btn to="/reservations">Reservations</v-btn>
    <v-btn to="contactus">Contact Us</v-btn>
    <v-btn to="orders" v-if="isLoggedIn">My Orders</v-btn>

    <v-avatar to="userprofile" v-if="isLoggedIn">
        <span class="text-h5 text-white">A</span>
        </v-avatar>

    <v-btn to="/login" v-else>Login</v-btn>
</v-app-bar>
</template>