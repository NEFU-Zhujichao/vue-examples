<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item to="/Example01">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Welcome</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example02">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>数据驱动&计算属性</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list-group prepend-icon="mdi-account-circle" no-action>
      <template v-slot:activator>
        <v-list-item-title>路由传参</v-list-item-title>
      </template>
      <v-list-item to="/Example03/students/73/homework/1">
        <v-list-item-title>sid:73 hid:1</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example03/students/12/homework/2">
        <v-list-item-title>sid:12 hid:2</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
    <v-list-group prepend-icon="mdi-ticket" no-action>
      <template v-slot:activator>
        <v-list-item-title>基本指令</v-list-item-title>
      </template>
      <v-list-item to="/Example04-1">
        <v-list-item-title>v-text v-if v-show</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example04-2">
        <v-list-item-title>v-bind</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example04-3">
        <v-list-item-title>v-for</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
    <v-list-group prepend-icon="adb" no-action>
      <template v-slot:activator>
        <v-list-item-title>双向绑定</v-list-item-title>
      </template>
      <v-list-item to="/Example05-1">
        <v-list-item-title>v-model</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example05-2">
        <v-list-item-title>example</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
    <v-list-group prepend-icon="mdi-ticket" no-action>
      <template v-slot:activator>
        <v-list-item-title>Vuex</v-list-item-title>
      </template>
      <v-list-item to="/Example06-1">
        <v-list-item-title>绑定计算属性</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example06-2">
        <v-list-item-title>同步修改计算属性</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/Example06-3">
        <v-list-item-title>异步修改计算属性</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
    <v-list-group prepend-icon="mdi-ticket" no-action>
      <template v-slot:activator>
        <v-list-item-title>axios&mock&Vuex</v-list-item-title>
      </template>
      <v-list-item to="/Example07-1">
        <v-list-item-title>axios基本请求</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item to="/homeworks">
        <v-list-item-title>homeworks</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
    <v-list>
      <v-list-item to="/Example08">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>props</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example09">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>interceptors</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example10">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>嵌套路由</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example11">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Sessionstorage</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example12">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>前后端联调</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item to="/Example13">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>读取Excel表格</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
