import xlsx from "xlsx";

export function readExcel(file) {
  return new Promise(resolve => {
    let students = [];
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    // 异步
    reader.onload = event => {
      let data = event.target.result;
      let workbook = xlsx.read(data, { type: "binary" });
      let sheet = workbook.Sheets[workbook.SheetNames[0]];
      xlsx.utils.sheet_to_row_object_array(sheet).forEach(r => {
        if (!isNaN(parseInt(r.课程))) {
          let stu = new Student();
          stu.number = r.课程;
          stu.name = r.__EMPTY;
          stu.dataStructure = r.数据结构;
          students.push(stu);
        }
      });
    };
    // 当load结束，回调
    // 当执行resolve()方法，会激活调用处的then()方法
    reader.onloadend = () => {
      resolve(students);
    };
  });
}
class Student {
  number;
  name;
  dataStructure;
}
