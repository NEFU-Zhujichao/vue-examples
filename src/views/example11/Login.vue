<template>
  <div>
    <h1>加强版登录</h1>
    <p>用户未登录，加载此组件</p>
    <p>当用户名/密码：1001，123456。</p>
    <form ref="form">
      <label>用户名</label>
      <input type="text" v-model="number" />
      <br />
      <label>密码</label>
      <input type="password" v-model="password" />
      <br />
      <button type="button" @click="login">提交</button>
    </form>
  </div>
</template>
<script>
import { LOGIN } from "@/store/types";
export default {
  data: () => ({
    number: null,
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });
      this.$refs.form.reset();
    }
  }
};
</script>
