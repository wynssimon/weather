let astronomy = document.querySelector('.astronomy');
let nu = document.querySelector('.nu');
let long;
let lat;
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let Icon = document.querySelector('.icon'); 
let windrichting = document.querySelector('.windrichting');
let windsnelheid = document.querySelector('.windsnelheid');
let degreeSection = document.querySelector('.degree-section')
let gevoelstemperatuur = document.querySelector('.gevoelstemperatuur')
let vochtigheid = document.querySelector('.vochtigheid')

let zonOpkomst = document.querySelector('.zon-opkomst');
let zonOndergang = document.querySelector('.zon-ondergang');
let maanOpkomst = document.querySelector('.maan-opkomst');
let maanOndergang = document.querySelector('.maan-ondergang');

let foreground = document.querySelector('.foreground');
let foreground2 = document.querySelector('.foreground2');

var video = document.getElementById("myVideo");

window.addEventListener('load', ()=> {
    function myFunction() {
    if (video.paused) {
        video.play();
    } 
    }
        
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.weatherapi.com/v1/current.json?key=df8a192642db475aa88145953221909&q=${lat},${long}&aqi=no`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_c, temp_f, wind_dir, wind_kph, feelslike_c, feelslike_f, humidity} = data.current;
                const {name} = data.location;
                const {icon} = data.current.condition;

                temperatureDegree.textContent = temp_c + `°C`;
                gevoelstemperatuur.textContent = `feels like ` + feelslike_c + `°C`;
                locationTimezone.textContent = name;
                Icon.src = icon;  
                windrichting.textContent = wind_dir;
                windsnelheid.textContent = wind_kph + ` km/h`;
                vochtigheid.textContent = humidity + `%`;
          
                degreeSection.addEventListener('click', () => {
                    if (temperatureDegree.textContent.includes("°F")){
                        temperatureDegree.textContent = temp_c + `°C`;
                        gevoelstemperatuur.textContent = `feels like ` + feelslike_c + `°C`;

                    } else {
                        temperatureDegree.textContent = temp_f + `°F`;
                        gevoelstemperatuur.textContent = `feels like ` + feelslike_f + `°F`;
                    }
                })
            });
        });
    }
});

astronomy.addEventListener('click', ()=> {
    foreground.style = "display: none";
    foreground2.style = "display: flex";

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `${proxy}http://api.weatherapi.com/v1/astronomy.json?key=df8a192642db475aa88145953221909&q=${lat},${long}&dt=2022-09-20`;
    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data);
        const {sunrise, sunset, moonrise, moonset} = data.astronomy.astro;
        const {name} = data.location;

        zonOpkomst.textContent = `Rise: ` + sunrise;
        zonOndergang.textContent = `Set: ` + sunset;
        maanOpkomst.textContent = `Rise: ` + moonrise;
        maanOndergang.textContent = `Set: ` + moonset;
    });
    
        }    
    )}
});

nu.addEventListener('click', ()=> {
    foreground.style = "display: flex";
    foreground2.style = "display: none";

    function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
    }
        
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.weatherapi.com/v1/current.json?key=df8a192642db475aa88145953221909&q=${lat},${long}&aqi=no`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_c, temp_f, wind_dir, wind_kph, feelslike_c, feelslike_f, humidity} = data.current;
                const {name} = data.location;
                const {icon} = data.current.condition;

                temperatureDegree.textContent = temp_c + `°C`;
                gevoelstemperatuur.textContent = `feels like ` + feelslike_c + `°C`;
                locationTimezone.textContent = name;
                Icon.src = icon;  
                windrichting.textContent = wind_dir;
                windsnelheid.textContent = wind_kph + ` km/h`;
                vochtigheid.textContent = humidity + `%`;
          
                degreeSection.addEventListener('click', () => {
                    if (temperatureDegree.textContent.includes("°F")){
                        temperatureDegree.textContent = temp_c + `°C`;
                        gevoelstemperatuur.textContent = `feels like ` + feelslike_c + `°C`;

                    } else {
                        temperatureDegree.textContent = temp_f + `°F`;
                        gevoelstemperatuur.textContent = `feels like ` + feelslike_f + `°F`;
                    }
                })
            });
        });
    }
});
