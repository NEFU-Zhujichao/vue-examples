<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }} / {{ replace }}</p>
    <button @click="change">click</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: "Zhujichao",
    courses: ["Java!", "Spirng!", "Vue!"],
    user: {
      name: "zhujcihao2",
      insertTime: "2021-1-3T17.11.53"
    }
  }),
  methods: {
    change: function() {
      this.msg = "Hello";
    }
  },
  computed: {
    replace() {
      return this.user.insertTime.replace("T", " ");
    },
    myDate() {
      return date => date.replace("T", " ");
    }
  }
};
</script>
