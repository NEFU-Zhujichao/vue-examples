<template>
  <div>
    <p>{{ homework.name }}</p>
  </div>
</template>
<script>
import { GET_HOMEWORK } from "@/store/types";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  data: () => ({
    homework: {}
  }),
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid }).then(h => {
      this.homework = h;
    });
  }
  /*computed: {
    ...mapState(["homework"])
  }*/
};
</script>
