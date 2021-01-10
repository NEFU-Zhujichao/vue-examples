<template>
  <div>
    <index v-if="isLogin" />
    <login v-else />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {
    login: () => import("./Login"),
    index: () => import("./Index")
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
