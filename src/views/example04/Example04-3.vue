<template>
  <div>
    <ul>
      <li v-for="(c, index) in courses" :key="index">
        {{ c.name }} / {{ formatDate(c.deadLine) }}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>date</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) in courses" :key="index">
          <td>{{ index }}</td>
          <td>{{ c.name }}</td>
          <td>{{ formatDate(c.deadLine) }}</td>
          <td><button @click="removeItems(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
    <button @click="addItems">addItems</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    courses: [
      { id: 1, name: "Java", deadLine: "2020-01-05T13:58" },
      { id: 2, name: "Spring", deadLine: "2020-01-04T13:58" },
      { id: 3, name: "Vue", deadLine: "2020-01-03T13:58" }
    ]
  }),
  computed: {
    formatDate() {
      return date => date.replace("T", " ").substring(0, 16);
    }
  },
  methods: {
    removeItems(index) {
      this.$delete(this.courses, index);
    },
    addItems() {
      this.$set(this.courses, this.courses.length, {
        id: this.courses.length + 1,
        name: "Spring Cloud",
        deadLine: new Date().toISOString()
      });
    }
  }
};
</script>
