let search = document.getElementById("searching") ;// input tag 
let cityname = document.getElementById("cityname");
let temp = document.getElementById("temp")


let getinfo = async() =>
{
    let input = search.value
    if (input == "")  // if no input id given
     {
        alert("no name")
        
    } else {
        // fetching  data from api
        
       let url= `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
          let response= await fetch(url)
           let data =  await response.json()  // fetching only json
           cityname.textContent =`${data.name} /${data.sys.country}`
           temp.textContent = data.main.temp
           

   
    }

}
