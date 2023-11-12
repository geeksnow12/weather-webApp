const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==""){
        city_name.innerText='Plz write the name before search';
    }else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ceeccb22be593ed4c098309a0efea362`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        temp.innerText=arrData[0].main.temp;
        temp_status.innertText=arrData[0].weather[0].main;
        }
        catch{
            city_name.innerText='Plz enter the city name properly';
        }
    }
}

submitBtn.addEventListener('click',getInfo);