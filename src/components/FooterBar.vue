<template>
  <div class="footer-bar">
    <router-link to="/firt">首页</router-link>
    <router-link to="/college">大学</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>

<style lang="scss">
.footer-bar {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  line-height: 45px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>