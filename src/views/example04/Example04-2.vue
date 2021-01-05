<template>
  <div>
    <div>
      <label>
        <input type="checkbox" @click="changeStatus" />
        同意以上条款
      </label>
      <br />
      <button :disabled="disabled">提交</button>
    </div>
    <div>
      <p @mouseover="active" @mouseleave="deactive" :class="{ bg_red: bg }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        quam?
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    disabled: true,
    bg: false
  }),
  methods: {
    changeStatus() {
      this.disabled = !this.disabled;
    },
    active() {
      this.bg = true;
    },
    deactive() {
      this.bg = false;
    }
  }
};
</script>
<style scoped>
.bg_red {
  background-color: red;
}
</style>
