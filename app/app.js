const search = document.querySelector('.inputqidirish')
const city = document.querySelector('.text')
const cell = document.querySelector('.cell')
const minmax = document.querySelector('#minmax')
const type=document.querySelector('.type')
const api = {
    key: '7e726113ed42774f840762ba738e8d31',
    base: 'https://api.openweathermap.org/data/2.5'
}


search.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
    showResult (search.value )
    }
})

function showResult(search) {
    fetch(`${api.base}/weather?q=${search}&units=metric&appid=${api.key}`).then((weather) => {
        return weather.json()
    }).then (displayResult)
}
function displayResult(weather){
    city.textContent=`${weather.name},${weather.sys.country}`
    cell.innerHTML=`${Math.round(weather.main.temp)}&#8451`
    minmax.innerHTML=`${Math.round(weather.main.temp_max)}&#8451/ ${Math.round(weather.main.temp_min)}&#8451`
    type.textContent=`${weather.weather[0].main}`
    console.log(weather);
}
