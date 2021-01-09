<template>
  <div>
    <ul>
      <li v-for="(h, index) in homeworks" :key="index">
        <router-link :to="`/Example10/homeworks/${h.id}`">
          {{ h.name }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
import { LIST_HOMEWORKS } from "@/store/types";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>
