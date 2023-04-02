const API_KEY = "1ed0eeaa7f09a15becdac442321ae70c";

function onGeo0k(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} /`;
    });
}
function onGeoError(){
    alert("찾지 못했습니다.")
}

navigator.geolocation.getCurrentPosition( onGeo0k, onGeoError);