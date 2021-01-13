<template>
  <div>
    <label>
      上传文件
      <input type="file" @change="loadFile" />
    </label>
    <template v-if="students">
      <table>
        <tr>
          <td>#</td>
          <td>学号</td>
          <td>姓名</td>
          <td>数据结构</td>
        </tr>
        <tr v-for="(s, index) in students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ s.number }}</td>
          <td>{{ s.name }}</td>
          <td>{{ s.dataStructure }}</td>
        </tr>
      </table>
    </template>
  </div>
</template>
<script>
import { readExcel } from "@/utils/ReadExcelUtil";
export default {
  data: () => ({
    students: null
  }),
  methods: {
    loadFile(event) {
      let file = event.target.files[0];
      readExcel(file).then(data => {
        this.students = data;
      });
      console.log("vue");
    }
  }
};
</script>
