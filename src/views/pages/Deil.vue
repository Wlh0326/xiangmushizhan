<template>
  <div>
    <div class="liDiv" v-for="(item,index) in getData" :key="index">
      <ul>
        <li>{{item.title}}</li>
        <li>{{item.user}}</li>
      </ul>
      <span @click="back(item)">返回</span>
      <button @click="add(item)">点赞{{item.count}}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  computed: {
    getData() {
      return this.$store.state.deil;
    }
  },
  methods: {
      back(item){
          this.$router.back(-1)
        //   this.$store.state.deil.splice(item,1)
      },
      add(item){
        this.$store.commit('addItem',item)
      }
  },
};
</script>
<style lang="scss">
span {
  display: inline-block;
  width: 50px;
  background: blanchedalmond;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: azure;
  border-radius: 5px;
}
button{
    width: 70px;
    height: 30px;
    border: none;
    outline: none;
    background: azure;
    margin-top: 30px;
    margin-right: 30px;
    border-radius: 5px;
}
</style>