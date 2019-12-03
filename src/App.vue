<template>
  <div id="app">
    <div class="warp">
      <div class="header"></div>
      <div class="main">
        <transition name="fade">
         <router-view />
        </transition>
      </div>
      <div class="footer">
        <FooterBar />
      </div>
    </div>
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar";
export default {
  components: {
    FooterBar
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  appearance: none;
  user-select: none;
  outline: none;
  text-decoration: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  height: 100%;
}
.warp{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column
}
.header {
  width: 100%;
  height: 45px;
  background: #42b983;
}
.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.footer {
  width: 100%;
  height: 45px;
  background: #42b983;
}
.fade-enter{
  transform: translateY(100%);
  opacity: 0;
}
.fade-leave-to{
  transform: translateY(-100%);
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s linear
}

</style>
