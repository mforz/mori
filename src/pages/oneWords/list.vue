<template>
  <div class="one-list">
    <ul class="list" >
      <li class="item" v-for="(item,index) in list" :key="index" :class="'item-'+index">
        <p class="word" ><span>{{item.word}}</span></p>
        <a class="author">——{{item.author}};<i class="user">-{{item.user}}</i></a>
        <a class="operation">+,+++++,+++++,</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'List',
  props:{
    list:{
      type:Array,
      default:[],
    }
  },
  data(){
    return{}
  },
}
</script>

<style scoped>
  .one-list{
    width:100%;
  }
  .one-list .list{
    text-align: left;
    overflow: hidden;
    margin:0;
    padding:0 20px;
    list-style:none
  }
  .list .item{
    width:100%;
    overflow: hidden;
    padding:10px 0;
    border-bottom: 1px solid #F0F0F0;
  }
  .item .author{
   float: right;
   margin:0 10px;
   font-size:13px;
  }
  .author .user{
    color:red
  }
  .word span{
    cursor: pointer;
    border-bottom:1px solid #b76f40;
  }
</style>
