<template>
  <v-app id="app" style="border: 1px solid red;">
    <v-container fluid style="border: 1px solid red;">
      <v-row style="border: 1px solid red;">
        <v-col md="3"><sidebar id="sidebar" /></v-col>
        <v-col md="9">
          <h1>HelloVue</h1>
          <hr />
          <router-view id="router" :key="$route.path" />
        </v-col>
      </v-row>
    </v-container>
    <alertdialog />
  </v-app>
</template>
<script>
import sidebar from "./views/Sidebar";
export default {
  components: {
    sidebar,
    alertdialog: () => import("@/components/Dialog")
  }
};
</script>
