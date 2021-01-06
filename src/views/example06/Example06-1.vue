<template>
  <div>
    <p>基于计算属性取值</p>
    <p>{{ getUser.name }} / {{ getUser.address }}</p>
    <p>基于mapState(... 对象扩展符)取值</p>
    <p>{{ user.name }} / {{ user1.address }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    ...mapState(["user"]),
    ...mapState({ user1: state => state.user })
  }
};
</script>
