<template>
  <div v-if="isLogin">
    <login />
  </div>
  <div v-else>
    <index />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {
    login: () => import("./Index"),
    index: () => import("./Login")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
