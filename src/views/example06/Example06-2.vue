<template>
  <div>
    <div>
      <p>{{ user.name }}</p>
      <p>{{ user.address }}</p>
    </div>
    <div>
      <input
        type="text"
        placeholder="please enter name"
        v-model="myUser.name"
      />
      <br />
      <input
        type="text"
        placeholder="please enter address"
        v-model="myUser.address"
      />
      <br />
      <button type="button" @click="change">提交</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { UPDATE_USER } from "@/store/types";
export default {
  data: () => ({
    myUser: {
      name: null,
      address: null
    }
  }),
  methods: {
    change() {
      this.$store.commit(UPDATE_USER, this.myUser);
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
