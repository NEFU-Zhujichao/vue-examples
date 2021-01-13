<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on"></v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Tips
        </v-card-title>

        <v-card-text>
          {{ exp.message }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I know
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false
    };
  },
  watch: {
    exp() {
      this.dialog = true;
    }
  },
  computed: {
    ...mapState({ exp: state => state.exception })
  }
};
</script>
