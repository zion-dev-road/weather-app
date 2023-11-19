const apiKey = "8cbf1ace64385236a848412bd2d4152f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".city-search");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
async function weatherDetail(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status==404){
        document.querySelector('.error').style.display="block"
        document.querySelector('.weather').style.display="none"

    }else{
        document.querySelector('.weather').style.display="block"
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + "KM/hr";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      
        if ((data.weather[0].main == "Clouds")) {
          weatherIcon.src = "./images/clouds.png";
        } else if ((data.weather[0].main == "Clear")) {
          weatherIcon.src = "./images/clear.png";
        } else if ((data.weather[0].main == "Rain")) {
          weatherIcon.src = "./images/rain.png";
        } else if ((data.weather[0].main == "Drizzle")) {
          weatherIcon.src = "./images/drizzle.png";
        } else if ((data.weather[0].main == "Mist")) {
          weatherIcon.src = "./images/mist.png";
        }

        document.querySelector('.error').style.display="none"

    }

  
}
// weatherDetail()
searchBtn.addEventListener("click", () => {
  weatherDetail(searchBox.value);
});
