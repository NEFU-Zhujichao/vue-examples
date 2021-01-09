<template>
  <div>
    <form>
      <p>当前用户名/密码：1001/123456</p>
      用户名：
      <input type="text" v-model="number" />
      <br />
      密码：
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
    }
  }
};
</script>
