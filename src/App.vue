<template>
  <div id="app">
    <sidebar id="sidebar" />
    <div>
      <h1>HelloVue</h1>
      <hr />
      <router-view id="router" :key="$route.path" />
      <alertdialog />
    </div>
  </div>
</template>
<script>
import sidebar from "./views/Sidebar";
export default {
  components: {
    sidebar,
    alertdialog: () => import("@/components/AlertDialog")
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  border: 1px solid red;
}
#sidebar {
  border: 1px solid springgreen;
  width: 300px;
  margin: 20px;
}
#router {
  border: 1px solid springgreen;
}
</style>
