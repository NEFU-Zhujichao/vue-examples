<template>
  <div>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
        同意
      </label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`l-${index}`">
          <input
            ref="checkboxs"
            type="checkbox"
            :key="`c-${index}`"
            :disabled="!agreed"
            v-model="selectCourses"
            :value="{ id: c.id }"
            @change="changeCheckboxs"
          />
          {{ c.name }}
        </label>
        <br :key="`b-${index}`" />
      </template>
      <button
        type="button"
        :disabled="!agreed || !(selectCourses.length >= amount)"
      >
        sumbit
      </button>
    </form>
    {{ selectCourses }}
  </div>
</template>
<script>
export default {
  data: () => ({
    agreed: false,
    selectCourses: [{ id: 1 }],
    amount: 2,
    courses: [
      { id: 1, name: "Java" },
      { id: 2, name: "SpringBoot" },
      { id: 3, name: "Vue" },
      { id: 4, name: "Spring Cloud" }
    ]
  }),
  methods: {
    alert() {
      console.log(this.agreed);
    },
    changeAgree() {
      this.agreed = !this.agreed;
    },
    changeCheckboxs() {
      let dis = this.selectCourses.length >= this.amount;
      this.$refs.checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = dis));
    }
  }
};
</script>
