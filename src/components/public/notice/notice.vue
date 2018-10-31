<template>
  <transition name="el-message-fade" @enter="handleEnter" @leave="handleLeave">
    <div :style="style">

      <template v-if="type=='notice'">

            <div v-html="content" :class="noticeKey"></div>

            <a @click="close">
              <i class="ivu-icon ivu-icon-ios-close"></i>
            </a>

      </template>
      <template v-if="type=='message'">

            <div v-html="content" :class="noticeKey"></div>

            <a @click="close">
              <i class="ivu-icon ivu-icon-ios-close"></i>
            </a>
      </template>

    </div>
  </transition>
</template>

<script>
export default {
 
  props:{
    duration:{
      type:Number,
      default: 2
    },
    noticeKey:{
      type:String,
      default:'',
    },
    content:{
      type:String,
      default:'',
    },

    type:{
      type:String,
      default:'nomal'
    },

    name: {
      type: String,
      required: true
    },

    style:{
      type: Object,
      default:function(){
        return {
          right: '50%'
        }
      }
    },
  },

  data(){
    return{
      message:'',
      visible:true,
      timer:null,
    }
  },
  mounted() {
    this.close()
  },
  methods:{
    close(){
      this.timer = setTimeout(()=>{
        this.visible=false
        this.$el.parentNode.removeChild(this.$el);
      },this.duration*1000)
    },
    handleEnter (el) {
        if (this.type === 'message') {
            el.style.height = el.scrollHeight + 'px';
        }
    },
    handleLeave (el) {
        if (this.type === 'message') {
            // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
            if (document.getElementsByClassName('notice').length !== 1) {
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        }
    }
  },
  beforeDestroy() {
    this.timer=null
  },
}
</script>

<style scoped>
  .notice-msg{
    display: fixed;
    top:24px;
    right:20px;
    width:200px;
    height:60px;
  }
</style>
