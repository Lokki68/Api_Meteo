const APIKEY = '4b93ffd6f864e8fcce4f83fb557d320b';

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          `<i class="fas fa-temperature-high"></i>` + data.main.temp + '°c';
        document.querySelector('#humidity').innerHTML =
          `<i class="fas fa-tint"></i>` + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML =
          `<i class="fas fa-wind"></i>` + data.wind.speed + 'km/h';
      })
    )
    .catch((err) => console.log('Erreur :' + err));
};

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});

apiCall('Sundhoffen');
