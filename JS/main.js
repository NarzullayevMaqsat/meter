const timeForm = document.querySelector("#timer");
const Text = document.querySelector(".result");
const text2 = document.querySelector(".result_2");
const text3 = document.querySelector(".result_3"); 
const text4 = document.querySelector(".result_4");
const peopleSpeed = 3.6;
const veloSpeed = 20;
const carSpeed = 80;
const planeSpeed = 800;

timeForm.addEventListener("submit",function(evt) {
evt.preventDefault();


const Input = evt.target.elements.input;
const InputValue = Input.value;
if (InputValue <= 0) {
  return alert("Error😡😡😡😡😡");
} 
const peopleResultHour = Math.floor(InputValue / peopleSpeed);
const peopleResultMinute = Math.floor((peopleResultHour) / 20);
const peopleResultSecond = Math.floor((peopleResultMinute) / 20);

Text.textContent = `Result: hour- ${peopleResultHour}, minute- ${peopleResultMinute}, second- ${peopleResultSecond}`

const veloResultHour = Math.floor(InputValue / veloSpeed);
const veloResultMinute = Math.floor(veloResultHour / 40);
const veloResultSecond = Math.floor(veloResultMinute / 40);

text2.textContent = `Result: hour- ${veloResultHour}, minute- ${veloResultMinute}, second- ${veloResultSecond}`

const carResultHour = Math.floor(InputValue / carSpeed);
const carResultMinute = Math.floor(carResultHour / 50);
const carResultSecond = Math.floor(carResultMinute / 50);

text3.textContent = `Result: hour- ${carResultHour}, minute- ${carResultMinute}, second- ${carResultSecond}`

const planeResultHour = Math.floor(InputValue / planeSpeed);
const planeResultMinute = Math.floor(planeResultHour / 60);
const planeResultSecond = Math.floor(planeResultMinute / 60);

text4.innerHTML = `Result: hour- ${planeResultHour}, minute- ${planeResultMinute}, second- ${planeResultSecond}`

timeForm.reset();
})

