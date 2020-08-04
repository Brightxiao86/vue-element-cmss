<template>
    <div class="xm-layout">
        <el-container>
        <el-aside width="175px">  

             <XMAside />

        </el-aside>
        <el-container>
            <el-header>

                 <XMHeader />

            </el-header>
            <el-main>

                 <XMMain />

            </el-main>
        </el-container>
        </el-container>
     </div>
</template>
<script>
import XMAside from './XMAside.vue'
import XMHeader from './XMHeader.vue'
import XMMain from './XMMain.vue'

export default {
  components :{
       XMAside,
       XMHeader,
       XMMain
  },
}
</script>
<style lang="scss" scoped>
.xm-layout{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: height;
    background: rgba(247, 248, 250, 1);
}
.el-container{
  height: 100%;

}
.xm-aside{
    height: 100%;
    background-color: #545c64;
    height: 100%;
    color: #eee;
    padding-top: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 175px;
    overflow: auto;
}
.el-aside{
   background: rgba(68,68,68,1);
   color: #eee;
}
.xm-header {
    border-bottom: 1px solid #eee;
    height: 100%;
    line-height: 60px;
    background: white;
    padding: 0 25px;
}
.el-header{
     border-bottom: 1px solid #CDCBCB;
}
.el-container{
    background: #E2E1E1;
    
}
.el-header{
     background: white;
}
.el-main {

    position: absolute;
    top: 80px;
    bottom: 0;
    left: 175px;
    right: 0;
    overflow: auto;
    box-sizing: border-box;
    
    margin-left: 20px;
    padding: 25px;
    background: white;
    min-width: 900px;
}
</style>