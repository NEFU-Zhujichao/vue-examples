<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>name</td>
          <td>deadline</td>
          <td>option</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(h, index) in homeworks" :key="index">
          <td>{{ h.id }}</td>
          <td>{{ h.name }}</td>
          <td>{{ h.deadline }}</td>
          <td><delbutton :homework="h" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { LIST_HOMEWORKS } from "@/store/types";
import { mapState } from "vuex";
import delbutton from "./DelButton";
export default {
  components: { delbutton },
  created() {
    this.$store.dispatch(LIST_HOMEWORKS);
  },
  computed: {
    ...mapState(["homeworks"])
  }
};
</script>
