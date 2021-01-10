<template>
  <div>
    <h1>欢迎你管理员{{ name }}</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["name"])
  }
};
</script>
