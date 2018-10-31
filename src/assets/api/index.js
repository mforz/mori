

// 说明 it120 =>  it120.cc
const getWeather =()=>{
  return $http({
    methods:'get',
    url:`/weather/ipdx/weather.d.html?length=1&air=1&callback=`
  })
}


export {
  getWeather,
}