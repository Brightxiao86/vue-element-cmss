<template>
     <div xm-Header>
           <div class="navc">
                <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">添加商品</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
     </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
 .navc{

       margin-top: 20px;
 }
</style>