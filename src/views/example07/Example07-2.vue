<template>
  <div>
    <ul>
      <li v-for="(h, index) in homeworks" :key="index">
        <router-link :to="`/homeworks/${h.id}`">
          {{ h.name }} / {{ h.deadline }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { LIST_HOMEWORKS } from "@/store/types";
export default {
  created() {
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>
