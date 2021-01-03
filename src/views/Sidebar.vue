<template>
    <div>
        <div id="courses">
            <ul>
            <li>Java</li>
            <li>Spring</li>
            <li>Vue</li>
            </ul>
        </div>
        <div id="router">
            <li><router-link to="/Example01" id="router-link">To</router-link></li>
            <li><router-link to="/Example02" id="router-link">Data</router-link></li>
            <li>
                <ul>
                    <li><router-link to="/Example03/students/73/homework/1">跳转1</router-link></li>
                    <li><router-link to="/Example03/students/12/homework/2">跳转2</router-link></li>
                </ul>
            </li>
        </div>
    </div>
</template>
<style scoped>
   #courses ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-direction: column;
        list-style-type: none;
        text-align: center;
    }
   #courses li {
        background: green;
        height: 50px;
        line-height: 50px;
    }
   #courses li:hover {
        background: royalblue;
        color: white;
    }
    #router {
        display: block;
        margin: 20px 0;
    }
    #router li{
        list-style-type: none;
    }
    #router-link {
        text-decoration: none;
        display: block;
        padding: 10px 20px;
        text-align: center;
    }
    #router-link:hover {
       background: red;
    }
</style>