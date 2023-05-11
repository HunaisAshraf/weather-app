let form = document.getElementById("cityName")
let button = document.getElementById("submitBtn")
let message = document.getElementById("city_name")
let temp = document.getElementById("temp_real_val")

let getInfo = async(event) =>{
    event.preventDefault()
    let cityVal = form.value
    if (cityVal == "") {
        message.textContent = "please enter a city name before search"
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=26d283fdc1667a15b54282dd8059e2cc`
            let response = await fetch(url)
            let data = await response.json()
            temp.innerText = data.main.temp
            message.textContent = `${data.name}`
        }catch{
            message.textContent = "Enter a valid city name"
        }
    }
}

button.addEventListener("click",getInfo)
