const quentions = [
  {
    que: "which of the following is a markup languge?",
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
    correct: " b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup languge",
    b: "Cascading Style Shit",
    c: "Javascript",
    d: "none of the above",
    correct: " b",
  },
];

let index = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const loadqueston = () => {
  const data = quentions[index];
  console.log(data);
  quesBox.innerHTML = '${index+1} ${data.que}';

  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
};
