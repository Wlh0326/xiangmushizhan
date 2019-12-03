<template>
    <div>
        <div v-for="(item,index) in list" :key="index" class="liDiv" @click="addItem(item)">
            <ul>
                <li>{{item.title}}</li>
                <li>{{item.user}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            this.$http.get('/getList').then(res=>{
                this.list = res.data.data
                this.$store.commit('stateList',res.data.data)
            })
        },
        addItem(item){
            this.$store.commit('deilList',item)
            this.$router.push({
                name:'deil',
                params:{
                    item
                }
            })
        }
    },
}
</script>

<style lang="scss">
    .liDiv{
        width: 100%;
        height: 180px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        ul{
            width: 100%;
            height: 100%;
            li{
                height: 50px;
            }
        }
    }
</style>