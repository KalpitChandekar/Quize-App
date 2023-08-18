const questions = [
  {
    que: "which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JS",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was Javascript launched?",
    a: "1999",
    b: "1995",
    c: "1996",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheets",
    c: "Javascript",
    d: "none of the above",
    correct: "b",
  },
];

let index = 0;

const quesBox = document.getElementById("box");
const optionInputs = document.querySelectorAll(".option");
const submitButton = document.querySelector(".btn");

const loadQuestion = () => {
  const data = questions[index];
  console.log(data);
  quesBox.querySelector("h2").innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.textContent = data.a;
  optionInputs[1].nextElementSibling.textContent = data.b;
  optionInputs[2].nextElementSibling.textContent = data.c;
  optionInputs[3].nextElementSibling.textContent = data.d;
};

loadQuestion();

submitButton.addEventListener("click", () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    quesBox.innerHTML = "<h2>Quiz Completed!</h2>";
  }
});
