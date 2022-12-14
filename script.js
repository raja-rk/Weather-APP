const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '938f96e07fmsh574e68a92c6296fp19e56cjsn373b2006cb94',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
    
	console.log(response)
	cloud_pct.innerHTML=response.cloud_pct
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity
	max_temp.innerHTML=response.max_temp
	min_temp.innerHTML=response.min_temp
	sunrise.innerHTML=response.sunrise
	temp.innerHTML=response.temp
	temp2.innerHTML=response.temp
	wind_degrees.innerHTML=response.wind_degrees
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed

	if(response.temp>10 && response.temp<=25){
		tempstatus.innerHTML="Its Moderately Cold Outside"
	}
	else if(response.temp<=10)tempstatus.innerHTML="Its Too Cold Outside"
	else if(response.temp>25)tempstatus.innerHTML="Its Hot Outside"
})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi") 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Livingston', options)
	.then(response => response.json())
	.then(response =>{
	c1.innerHTML=response.cloud_pct
	c2.innerHTML=response.feels_like
	c3.innerHTML=response.humidity
	c4.innerHTML=response.max_temp
	c5.innerHTML=response.min_temp
	c6.innerHTML=response.sunrise
	c7.innerHTML=response.sunset
	c8.innerHTML=response.temp
	c9.innerHTML=response.wind_degrees
	c10.innerHTML=response.wind_speed
})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response =>{
	b1.innerHTML=response.cloud_pct
	b2.innerHTML=response.feels_like
	b3.innerHTML=response.humidity
	b4.innerHTML=response.max_temp
	b5.innerHTML=response.min_temp
	b6.innerHTML=response.sunrise
	b7.innerHTML=response.sunset
	b8.innerHTML=response.temp
	b9.innerHTML=response.wind_degrees
	b10.innerHTML=response.wind_speed
})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jalandhar', options)
	.then(response => response.json())
	.then(response =>{
	a.innerHTML=response.cloud_pct
	b.innerHTML=response.feels_like
	c.innerHTML=response.humidity
	d.innerHTML=response.max_temp
	e.innerHTML=response.min_temp
	f.innerHTML=response.sunrise
	g.innerHTML=response.sunset
	h.innerHTML=response.temp
	i.innerHTML=response.wind_degrees
	j.innerHTML=response.wind_speed
})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response =>{
	A.innerHTML=response.cloud_pct
	B.innerHTML=response.feels_like
	C.innerHTML=response.humidity
	D.innerHTML=response.max_temp
	E.innerHTML=response.min_temp
	F.innerHTML=response.sunrise
	G.innerHTML=response.sunset
	H.innerHTML=response.temp
	I.innerHTML=response.wind_degrees
	J.innerHTML=response.wind_speed
})
	.catch(err => console.error(err));



	
	
