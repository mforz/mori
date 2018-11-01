<template>

  <div class="say">
    <form action="./" @submit.prevent="submit">
      <div class="word">
        <span class="label">他说：</span>
        <textarea autofocus maxlength="200" placeholder="限制200字以内" required v-model="data.word">
        </textarea>
      </div>

      <div class="author">
        <span class="label">作者：</span>
        <input type="text" placeholder="不填则显示‘匿名’" v-model="data.author">
      </div>

       <div class="btn">
          <input type="submit" class="submit" value="提交">
        </div>
    </form>
   
  </div>

</template>

<script>
export default {
  name:'Say',
  data(){
    return{
      data:{
        word:'',
        author:'',
      }
    }
  },
  methods:{
    submit(){
      console.log('在这里进行上传操作')
      console.log('数据'+this.data)

      return false
    }
  }
}
</script>

<style scoped>
  .say{
    width:100%;
    margin:20px auto;
    text-align: center;
  }
  .label{
    font-size:12px;
  }
  .word,.author{
    width:95%;
    margin:30px auto;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .word textarea{
    width:80%;
    height:80px;
    resize:none;
    border:1px solid #F0F0F0;
    outline: none;
  }
  .author input{
    width:80%;
    height:25px;
    border:1px solid #F0F0F0;
    outline: none;
  }
  .submit{
    font-size: 14px;
    cursor: pointer;
    border:none;
    border-bottom: 1px solid #ccc;
    /* user-select: none; */
    background: #fff;
    outline: none;
  }
  .submit:hover{
    border-bottom: 1px solid #26A65B;
  }

</style>
