<template>
  <div>
    {{weather.city}}
    {{weather.day_weather}}
    <div class="main">
      <oneWords />
    </div>
  </div>
</template>

<script>
import {$init} from '@/assets/js/init.js'
import { $public } from '@/assets/js/public.js'
import {getWeather} from '@/assets/api/index.js'
import oneWords from '@/pages/oneWords/'
export default {
  name:'Home',
  components:{
    oneWords,
  },
  data(){
    return {
      weather:{},
    }
  },
  beforeMount(){
    //注册http请求。必须
    let _init = new $init()
    window.$http = _init.$http
  },
  mounted() {
    this.init()
    // this.$notice.open('notice',{
    //   name:'my',
    // })
  },
  methods:{
    init(){
      let _public = new $public()
      getWeather().then(res=>{
        this.weather=_public.weather(res.data)
        setTimeout(()=>{
          _public.setStore('weather',this.weather)
        },2000)
      }).catch(error=>console.log(error))
    }
  }

}
</script>

<style scoped>

</style>
