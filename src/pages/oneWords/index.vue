<template>
  <div class="one-words">
    
    <div class="main">

        <div class="header">
          <!-- <a class="main-header">~{{header.title}}</a> -->
          <p class="header-item one-header" @click="header.title='一句',status=1">一句</p>
          <p class="header-item words-header" @click="header.title='他说',status=2">他说</p>
        </div>

       <List v-show="status==1" :list="oneList"/>
       <Say v-show="status==2" />
       <!-- <Detail v-show="status==3" /> -->

    </div>
  </div>
</template>

<script>
import List from './list'
import Say from './input'
// import Detail from './detail'
import {getOneWord} from '@/assets/api/index.js'

export default {
  name:'oneWords',
  components:{
    List,
    Say,
    // Detail,
  },
  data(){
    return{
      status:1,
      oneList:[],
      page:0,
      header:{
        title:'一句'
      }
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){

      getOneWord(this.page).then(res=>{
        let list=res.data.data.data[0].result
        list.forEach(ele => {
          this.oneList.push({
            word:ele.ename,
            author:ele.author,
            user:'baidu',
            id:ele.SiteId,
          })
        });
      }).catch()
    }
  },
}
</script>
<style scoped>
  .one-words{
    width:80%;
    margin:0 auto;
  }
  .main{
    width:80%;
    min-height:600px;
    margin:0 auto;
    border:1px solid #F0F0F0;
    border-radius: 5px;
    position: relative;
    font-size:15px;
  }
  .header{
   font-size: 13px;
   position: absolute;
   left: -40px;
   top:25px;
   text-align: right;
  }
   .header-item{
    text-decoration: underline;
    cursor: pointer;
    color:#84AF9B;
  }
  .header-item:hover{
    color:#26A65B;
  }
  .main .list{

    text-align: left;
    overflow: hidden;
  }
  
</style>
