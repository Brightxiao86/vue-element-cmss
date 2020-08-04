<template>
<div class="xm-good-add">
    <h1>增加商品</h1>
   <div class="conter">

        <!-- 商品名称 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品名称:   
                </div>
            </el-col>

            <el-col :span="20">
                <div class="grid-content bg-purple-dark">
                    <el-input v-model="info.name" placeholder="请输入内容"></el-input>
                </div></el-col>
        </el-row>
   
        <!-- 商品介绍 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品介绍:   
                </div>
            </el-col>

            <el-col :span="20">
               <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入商品的详情介绍"
                    v-model="info.desc">
                </el-input>
            </el-col>
        </el-row>
   
        <!-- 商品价格 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品价格:   
                </div>
            </el-col>

            <el-col :span="10">
                <div class="grid-content bg-purple-dark">
                    <el-input v-model="info.price" placeholder="请输商品入价格"></el-input>
                </div>
            </el-col>
        </el-row>


        <!-- 商品品类 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品品类:   
                </div>
            </el-col>
            <el-col :span="9">
                <Dropdownbox  v-model="info.cate_zh"  />
            </el-col>
        </el-row>


        <!-- 商品图片 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品图片:   
                </div>
            </el-col>
            <el-col :span="12">
                <el-upload
                    class="upload-demo"
                    action="http://localhost:8890/api/v1/imageupload/img"
                    :on-success="imgUpload"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-col>
        </el-row>



         <!-- 是否热销 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    是否热销:   
                </div>
            </el-col>
            <el-col :span="9">
                <el-switch
                    v-model="info.hot"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
            </el-col>
        </el-row>


        <!-- 商品排名 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    商品排名:   
                </div>
            </el-col>
            <el-col :span="9">
             <el-input-number v-model="info.rank" :min="1" :max="100000000"></el-input-number>
            </el-col>
           </el-row>


        <!-- 确定 -->
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
            <el-col :span="12">
                 <el-button v-if="$route.params.id!=0" @click="submit" type="primary">修改</el-button>
                <el-button type="primary" v-else @click="submit">添加</el-button>

            </el-col>
           </el-row>
</div> 

</div> 
</template>

<script>
import { Dropdownbox } from '@/components/'
import img from '@/utils/img'
export default {
  components :{
       Dropdownbox
  },
     data: function(){
         return {
                img,
                cates: [
                { id: 1, cate_zh: '手机数码', cate: 'a' },
                { id: 2, cate_zh: '电脑办公', cate: 'b' },
                { id: 3, cate_zh: '家用电器', cate: 'c' },
                { id: 4, cate_zh: '户外产品', cate: 'd' },
            ],
    
            info: {
                name: '',
                desc: '',
                price: '',
                cate: '',
                img: '',
                hot: true,
                rank: 0
            },
            value: true,
             num: 1,
            textarea: '',
         }
         
     },
     mounted(){
            let id = this.$route.params.id
        if(id==0) id = false
        if(id) {
            // 这是编辑 
            this.$http.fetchGoodAmend({id}).then(res=>{
                this.info = res
            })
        }
     },
      methods: {
        // 图片上传成功时触发
        imgUpload(res) {
            console.log('图片上传成功', res)
            this.info.img = res.data.url
        },
        submit() {
            console.log('提交', this.info)
            let id = this.$route.params.id
            if(id==0) id=false
            //如果data没有id 就不执行if的语句 
            let data = this.info
            //判断id
            if (id){
                data.id = id
            }
            // 接口
            this.$http.fetchNewGood(data).then(()=>{
                this.$message({
                    message: '商品添加成功',
                    type: 'success'
                })
                this.info = {
                    name: '',
                    desc: '',
                    price: '',
                    cate: '',
                    img: '',
                    hot: false,
                    rank: 0
                }
            })
        },


    }
}
</script>

<style lang='scss' scoped>
.xm-good-add{
    // position: absolute;
    // top: 5px;
    margin-top: -26px;
}
.conter{
    width: 500px;
    margin:  0 auto;
}
.el-row {
    margin: 10px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>