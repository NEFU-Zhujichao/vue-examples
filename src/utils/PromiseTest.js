const { resolve } = require("core-js/fn/promise");

function get() {
  let name = "chao";
  //主线程走到这里发现是异步操作，转身去执行下面的操作。
  //异步操作被封装到异步事件队列中，等主线程有空了
  //回头上队列中执行能够执行的异步操作，返回异步结果
  setTimeout(() => {
    name = "qi";
  }, 2000);
  return name;
}
console.log(get());

function get2() {
  let name = "chao";
  return new Promise(resolve => {
    setTimeout(() => {
      name = "qi";
      resolve(name);
    }, 2000);
  });
}
get2().then(name => {
  console.log(name);
});

function get3() {
  let name = "chao";
  let res = resolve => {
    setTimeout(() => {
      name = "qi";
      resolve(name);
    }, 2000);
  };
  return new Promise(res);
}
get3().then(name => {
  console.log(name);
});

async function get4() {
  let name = await get3();
  console.log(name);
}
get4();
