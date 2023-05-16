const adviceNumberEl = document.querySelector("#advice-number");
const adviceTextEl = document.querySelector("#advice-text");
const button = document.querySelector("#dice");

const showAdvice = (data) => {
  adviceNumberEl.innerText = data.id;
  adviceTextEl.innerText = data.advice;
};

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  showAdvice(data.slip);
};

getAdvice();

button.addEventListener("click", getAdvice);
