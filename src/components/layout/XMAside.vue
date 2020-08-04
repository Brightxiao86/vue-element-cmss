<template>
     <div xm-aside>
       <div class="logo">
              <div class="demo-fit">
                <div class="block" v-for="fit in fits" :key="fit">
                    <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                </div>
              </div>
       </div>
            <el-menu
              :router="true"
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

              <!-- 父级导航：一层循环 -->
              <el-submenu v-for='cir in routes' :index="cir.id+''" :key='cir.id'>
                <template slot="title">
                  <i :class="cir.icon"></i>
                  <span v-text='cir.text'></span>
                </template>
                <!-- 子导航：二层循环 -->
                <el-menu-item 
                    v-for='item in cir.children' 
                    :index="item.id+''"
                    :key='item.id' 
                    :route="{'path':item.path.replace(':id',0),'component':item.component}">
                    <i :class="item.icon"></i>
                    <span v-text="item.text"></span>
                </el-menu-item>
              </el-submenu>
    </el-menu>
     </div>
</template>

<script>
import routes from '@/views/'
export default {
    data: function(){
      return {
        fits: [''],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        routes,

      }
    }
}
</script>
<style lang="scss" scoped>
 .logo{
   width: 175px;
   height: 100px;
   text-align: center;
   line-height: 60px;
 }
 .el-avatar img{
   width: 70px;
   height: 70px;
 }
.el-menu-vertical-demo{
  margin-top: 53px;
}
.el-avatar--square{
  border-radius:68px;
}
.el-avatar{
  margin-top: 33px;
}
 
 .el-submenu{
   width: 175px;
 }

li.el-menu-item .is-active{
    width: 90px;
}
li.el-menu-item{
  width: 90px;
}
.el-submenu .el-menu-item{
  min-width: 175px;
}
</style>