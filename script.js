const apiKey="612c7887598e17786239854a010a8715";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// console.log("hi");


async function checkWeather(CityName){
          try {
                    const response=await fetch(apiUrl+CityName+`&appid=${apiKey}`);

                    if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data=await response.json();
                    console.log(data);
                    document.querySelector(".city").innerHTML=data.name;
                    document.querySelector(".temp").innerHTML=`${Math.ceil(data.main.temp)}°c`;
                    document.querySelector(".humidity").innerHTML=`${data.main.humidity} %`;
                    document.querySelector(".wind").innerHTML = `${(3.6 * data.wind.speed).toFixed(1)} km/h`;


                    const weatherIcon=document.querySelector(".weather-icon")
                    console.log(weatherIcon);
                    
                    if(data.weather[0].main=="Clouds"){
                              weatherIcon.src="images/clouds.png";
                    }

                    else if(data.weather[0].main=="Clear"){
                              weatherIcon.src="images/clear.png";
                    }

                    else if(data.weather[0].main=="Drizzle"){
                              weatherIcon.src="images/drizzle.png";
                    }


                    else if(data.weather[0].main=="Mist"){
                              weatherIcon.src="images/mist.png";
                    }
                    else if(data.weather[0].main=="Rain"){
                              weatherIcon.src="images/rain.png";
                    }

                    document.querySelector(".weather").style.display="block"


          } catch (error) {
                    console.error("Error fetching weather:", error);
                    alert( "City not found!");
                    
          }
          
         
}

const searchBtn=document.querySelector(".search button");
searchBtn.addEventListener('click',()=>{
//         console.log("Hi");  
            let input=document.querySelector("#city-input")
//         console.log(input.value);
          let cityname=input.value.trim();

           if(cityname === ""){
          alert("Please enter a city name");
          return;
           }
          checkWeather(cityname);

})


