
const $public = function(){}
//0.0.1weather变换
$public.prototype.weather = (data)=>{
  if(!data){return}
  return {
    today:data.result.data.days.day[0].forecast_date,
    city:data.result.data.info.name,
    day_weather:`${data.result.data.days.day[0].day_weather_type}-
                  ${data.result.data.days.day[0].day_temperature}℃-
                  ${data.result.data.days.day[0].day_wind_type}-
                  ${data.result.data.days.day[0].day_wind_power}`,
    night_weather:`${data.result.data.days.day[0].night_weather_type}-
                    ${data.result.data.days.day[0].night_temperature}℃-
                    ${data.result.data.days.day[0].night_wind_type}-
                    ${data.result.data.days.day[0].night_wind_power}`,
  }
}
//0.0.1 localStorage存储
$public.prototype.setStore =(name,data)=>{
  if(!name||!data||!localStorage){return}
  localStorage.setItem(name,JSON.stringify(data))
}
$public.prototype.getStore =(name)=>{
  let item= localStorage.getItem(name)
  return JSON.parse(item)
}

export { $public }