<template>
  <div>
    <p>{{ homework }}</p>
  </div>
</template>
<script>
import { GET_HOMEWORK } from "@/store/types";
import { mapState } from "vuex";
export default {
  props: ["hid"],
  data: () => ({
    homework: null
  }),
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid }).then(h => {
      this.homework = h;
    });
  }
};
</script>
