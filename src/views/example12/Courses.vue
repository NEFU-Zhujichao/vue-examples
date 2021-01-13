<template>
  <div>
    <h1>添加课程</h1>
    <form>
      <label>
        名称：
        <input v-model="name" />
      </label>
      <br />
      <label>
        比重：
        <input v-model="weight" />
      </label>
      <br />
      <button type="button" @click="add">提交</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: null,
    weight: null
  }),
  methods: {
    add() {
      this.$store.dispatch("addCourse", {
        name: this.name,
        weight: this.weight,
        teacher: { id: 1 }
      });
    }
  }
};
</script>
