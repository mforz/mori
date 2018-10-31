<template>
  <div>
    {{weather.day_weather}}

    <div>
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
  mounted() {
    //注册http请求。必须
    let _init = new $init()
    window.$http=_init.$http
    //
    this.init()

    // this.$notice.open('notice',{
    //   name:'my',

    // })
  },
  methods:{
    init(){
      let _public =new $public()

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

<style>

</style>
