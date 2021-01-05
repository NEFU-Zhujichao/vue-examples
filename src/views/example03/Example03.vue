<template>
  <div>
    <div>
      <p>studentid:{{ $route.params.sid }}</p>
      <p>homeworkid:{{ hid }}</p>
      {{ getTitle }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["sid", "hid"],
  data: () => ({
    msg: "xiaoming",
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springMVC" },
      { id: 3, title: "JPA" }
    ]
  }),
  methods: {},
  created() {
    // $route.params.hid
    console.log("created()");
  },
  /*beforeUpdate() {
        console.log("beforeUpdate()")
    },
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate()")
        next()
    },*/
  computed: {
    getTitle() {
      return this.homeworks.find(h => h.id == this.hid).title;
    }
  }
};
</script>
