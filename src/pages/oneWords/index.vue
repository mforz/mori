<template>
  <div class="one-words">
    
    <div class="main">
        <div class="header">
          <a class="main-header">~{{header.title}}</a>
          <p class="header-item one-header" @click="header.title='一句'">一句</p>
          <p class="header-item words-header" @click="header.title='他说'">他说</p>
        </div>
      <ul class="list">
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'oneWords',
  data(){
    return{
      oneList:[],
      header:{
        title:'一句'
      }
    }
  }

}
</script>

<style scoped>
 
  .one-words{
    width:80%;
    margin:0 auto;
  }
  .main{
    width:80%;
    min-height:500px;
    margin:0 auto;
    border:1px solid #D0D0D0;
    border-radius: 5px;
    position: relative;
  }
  .header{
   font-size: 13px;
   position: absolute;
   left: -40px;
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
    width:50%;
    text-align: left;
  }


</style>
