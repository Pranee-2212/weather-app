const apiKey="a2ea53d6d4771827acd7962ae9071f0b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");


async function checkWeather(city){
    city=searchBox.value
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&unit=metric`);
       if (response.status==404){
             document.querySelector(".error").style.display="block";
             document.querySelector(".weather").style.display="none";
       }
       else{
        var data= await response.json();
    
        tempinc=data.main.temp - 273;

        console.log(data)
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(tempinc) +"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".speed").innerHTML=data.wind.speed + "km/h";
    
        
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none";
       }
      
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.Value);
})





////`&appid=${apiKey}`

//const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);