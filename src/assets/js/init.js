

const $init = ()=>{}

//ex:判断是否支持使用featch
$init.prototype.isFetch= ()=>{
  return !!window.fetch
}

$init.prototype.$http= (params={})=>{
  if(!axios){
    console.log('加载axios失败')
    return
  }
  let _params = Object.assign({
    methods: 'get',
    url: '',
    data: '',
  }, params)
  return axios({
    // baseURL: host,
    methods: _params.methods,
    url: _params.url,
    data: _params.data,

  })
}

export {$init}