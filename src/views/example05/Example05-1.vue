<template>
  <div>
    <form>
      用户名：
      <input type="text" placeholder="please enter name" v-model="user.name" />
      <br />
      性别：
      <label>
        <input type="radio" v-model="user.gender" value="male" />
        男
      </label>
      <label>
        <input type="radio" v-model="user.gender" value="famale" />
        女
      </label>
      <br />
      职称：
      <select v-model="user.title">
        <option v-for="(t, index) in titles" :value="{ id: t.id }" :key="index">
          {{ t.name }}
        </option>
      </select>
      <br />
      教授的课程：
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`lab-${index}`">
          <input type="checkbox" :value="{ id: c.id }" v-model="user.courses" />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <button type="button" @click="submit">提交</button>
    </form>
    {{ user }}
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      gender: null,
      title: null,
      courses: []
    },
    titles: [
      { id: 1, name: "教授" },
      { id: 2, name: "副教授" },
      { id: 3, name: "讲师" }
    ],
    courses: [
      { id: 1, name: "Java" },
      { id: 2, name: "Web系统框架" },
      { id: 3, name: "Linux" }
    ]
  }),
  methods: {
    submit() {
      console.log(this.user);
    }
  }
};
</script>
