let lokacija=document.getElementById("lokacija") ; 
let temperatura = document.getElementById("vrednost-temperature") ; 
let opisVremena=document.getElementById("kako-je-napolju") ; 
let ikona = document.getElementById("ikona-temperature") ; 
let dugmeVreme = document.getElementById("dugme-vreme") ; 
let inputVreme = document.getElementById("jedini-input") ; 

dugmeVreme.addEventListener("click",()=>{

    const pomocnilink = "https://cors-anywhere.herokuapp.com/" ;

    const api = `${pomocnilink}api.openweathermap.org/data/2.5/weather?q=${inputVreme.value}&appid=c8eeb2e29ddf36af688562fcfdab6662&lang=sr` ; 

    async function dohvatiAPi(){
        const odgovor = await fetch(api) ;
        const dataa = await odgovor.json() ; 
  
        const {name} = dataa ; 
        const {feels_like} = dataa.main ; 
        const {description,id} = dataa.weather[0] ; 

        lokacija.textContent= name ; 
        temperatura.textContent=Math.round(feels_like-273) ; 
        opisVremena.textContent = description ; 

        ikona.scr = `http://openweathermap.org/img/wn/${id}@2x.png` ; 
                    
       if(id<232){
        document.body.style.backgroundImage="url('slikeVreme/storm.jpg')"; 
       }else if(id<532){
        document.body.style.backgroundImage="url('slikeVreme/rain.jpg')"; 
       }else if(id<622){
        document.body.style.backgroundImage="url('slikeVreme/snow.jpg')"; 
       }else if(id===800){
        document.body.style.backgroundImage="url('slikeVreme/clear.jpg')"; 
       }else if(id>800){
        document.body.style.backgroundImage="url('slikeVreme/cloudly.jpg')"; 
       }
        console.log(dataa) ; 
   
   
    }
    dohvatiAPi(); 




});  
