<template>
    <div class="home">

        <h1>我的首页管理</h1>

        <el-input v-model="cate_zh" placeholder="请输入内容"></el-input>
        <el-input v-model="cate" placeholder="请输入内容"></el-input>
          <el-button type="primary" @click="submit">添加</el-button>
    </div>
</template>

<script>
export default {
    name:'Home',
    data :function (){
        return {
          cate_zh: '',
          cate:''
       }
    },
    methods :{
       submit(){
           let data={
               cate_zh: this.cate_zh,
               cate:this.cate
           }
           this.$http.fetchAddCate(data).then(()=>{
                 this.$message('添加成功');
                 this.cate_zh=''
                 this.cate=''
                 
           })

       }
    }
}
</script>

<style lang="scss" scoped>
.home{
    // position: absolute;
    // top: 5px;
    margin-top: -26px;
}
</style>