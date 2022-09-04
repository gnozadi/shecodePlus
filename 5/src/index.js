let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let timeInput = document.querySelector("#time");

let current = new Date();
let day = days[current.getDay()];
let hour = current.getHours();
let minutes = current.getMinutes();

timeInput.innerHTML = `${day}, ${hour}:${minutes}`;

function showTemp(response) {
  console.log(response);
  let currentTemp = response.data.main.temp;
  console.log(currentTemp);
  let temp = document.querySelector("#temp1");
  temp.innerHTML = currentTemp;
}

function display(event) {
  let apiKey = "8985f23024f1eee4bf9b26178c0e9353";

  event.preventDefault();
  let city = document.querySelector("#city");

  let searchInput = document.querySelector("#search-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
  city.innerHTML = searchInput.value;
}
let form = document.querySelector("#form-id");
form.addEventListener("submit", display);
