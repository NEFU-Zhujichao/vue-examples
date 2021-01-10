<template>
  <div>
    <h1>登录后系统首页</h1>
    <p>
      基于sessionstorage中数据判断用户登陆状态，登录后加载此组件。
      <router-link to="/Example11/welcome">仅登录才有此路由信息</router-link>
    </p>
    <p v-if="name">
      {{ name }}
    </p>
  </div>
</template>
<script>
import { INDEX } from "@/store/types";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch(INDEX);
  },
  computed: {
    ...mapState(["name"])
  }
};
</script>
