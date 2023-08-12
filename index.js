const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8adbf78f73msh41b3bb2351cf84fp19f4f7jsn87b33f6fb763',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{
	cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)

// fetch("http://api.openweathermap.org/data/2.5/weather?q="+city, options)
	.then(response => response.json())
	.then(response =>{
		 console.log(response)
		//  cloud_pct.innerHTML =response.cloud_pct
		 temp.innerHTML=response.temp
		 max_temp.innerHTML=response.max_temp
		 min_temp.innerHTML=response.min_temp
		 humidity.innerHTML=response.humidity
		 sunrise.innerHTML=response.sunrise
		 sunset.innerHTML=response.sunset
		 wind_degrees.innerHTML=response.wind_degrees
		 wind_speed.innerHTML=response.wind_speed
		})
	.catch(err => console.error(err));
}
	search.addEventListener("click", (e)=>{
		e.preventDefault()
		getweather(city.value)
	})
	getweather("Dehradun")