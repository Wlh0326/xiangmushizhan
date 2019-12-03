<template>
  <div class="header-bar">
    <router-link to="/firt/keep">关注</router-link>
    <router-link to="/firt/recomme">推荐</router-link>
    <router-link to="/firt/hot">热榜</router-link>
  </div>
</template>
<style lang="scss">
.header-bar {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>