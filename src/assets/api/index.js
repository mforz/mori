

// 说明 it120 =>  it120.cc
const getWeather =()=>{
  return $http({
    methods:'get',
    url:`/weather/ipdx/weather.d.html?length=1&air=1&callback=`
  })
}
const getOneWord =(i=0)=>{
  return $http({
    methods:'get',
    url:`it120/api/transmit/740?query=格言&resource_id=6844&pn=${i*50}`
  })
}

// https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=格言&resource_id=6844
export {
  getWeather,
  getOneWord,
}