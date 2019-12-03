<template>
    <div>
        <div class="nav">
            <HeaderBar />
        </div>
         <transition name="fade">
            <router-view></router-view>
        </transition>

    </div>
</template>
<script>
import HeaderBar from '../../components/HeaderBar'
export default {
    components:{
        HeaderBar
    }
}
</script>

<style lang="scss">
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