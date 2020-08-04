<template>
<div class="xm-good-list">
    <h1>商品列表</h1>

    <div class="filtrate">
        <el-row type="flex" align="middle">
            <el-col :span="2">筛选</el-col>
            <el-col :span="6">
                <Dropdownbox  v-model='cate'   />
            </el-col>
        </el-row>

    </div>


    <div class="conter">
        <el-table :data="list"  style="width: 100%">

            <el-table-column
            align='center'
            label="商品"
            width="190">
            <template slot-scope="scope">
                <img class="goodimg" :src="img.imgBaseUrl+scope.row.img">
                <div v-text="scope.row.name">商品名称</div>
            </template>
            </el-table-column>


            <el-table-column
                label="商品描述"
                align='center'
                prop='desc'
                width="190">
            </el-table-column>

            <el-table-column
                label="价格"
                align='center'
                prop='price'
                width="110">
            </el-table-column>

             <el-table-column
                label="品类"
                align='center'
                prop='name'
                width="180">
            </el-table-column>

            <el-table-column
                label="是否热销"
                align='center'
                prop='hot'
                width="110">
            </el-table-column>

             <el-table-column
                label="排名"
                align='center'
                prop='rank'
                width="150">
            </el-table-column>

            <el-table-column
                label="时间"
                align='center'
                prop='create_time'
                width="170">
               <template slot-scope="scope">
               {{scope.row.create_time | formatDateTime}}
               </template>
            </el-table-column>

            <el-table-column 
                class="navs"
                label="操作"
                align='center'
                width="160"
            >
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="skipToAdd(scope.row)"
                >编辑</el-button>
                <el-button
                size="mini"
                type="danger"
              >删除</el-button>
            </template>
            </el-table-column>
        </el-table>

    </div>
  <div>
      <el-pagination
            background
            @current-change='pageChange'
            layout="prev, pager, next"
            :total="1000">
      </el-pagination>
  </div>

</div>
    
</template>

<script>
import { Dropdownbox } from '@/components/'
import img from '@/utils/img'
export default {
      components :{
       Dropdownbox,

  },
        props: {
        value: {
        }
    },

     data: function() {
        return {
            cate: '',
            page:1,
            list: [],
            img,
            
            
        }
    },
    watch :{
      cate(){
          this.page = 1,
          this.init()
      }
    },
    mounted (){
        this.init()
    },
    methods:{
        init() {
         let params ={
           page:this.page,
           cate :this.cate 
        }
        this.$http.fetchGoodList(params).then(res=>{
             console.log('商品列表' ,res);
             this.list = res.list
             this.total = res.total

        })
        },
       pageChange(page){
           this.page = page 
           this.init ()
       },

        skipToAdd(row) { 
            console.log(row);
            this.$router.push('/good/add'+row._id)
            
        }
    },
}
</script>

<style lang='scss' scoped>
.goodimg{
    display: block;
    width: 100px;
    height: 100px;
    margin-left: 31px;
}
.xm-good-list{
    // position: absolute;
    // top: 5px;
    margin-top: -26px;
}
.filtrate{
    margin:auto;
}
.conter{
    // width: 1000px;
    margin-top: 60px;
    margin: auto;
}
.cell{
    margin-left: 100px;
}
.el-pagination{
    float: right;
    padding: 20px;
}
.Amend{
    background: white;
    position:absolute;
    left:23px;
    top:22px;
    right:0;
    bottom:0;
    margin:auto;
    // display: none;

}
</style>