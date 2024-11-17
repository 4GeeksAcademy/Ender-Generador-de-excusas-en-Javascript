import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const ramdomElement = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  let imprimir = "";
  imprimir = `
    ${who[ramdomElement(who)]} 
    ${action[ramdomElement(action)]} 
    ${what[ramdomElement(what)]} 
    ${when[ramdomElement(when)]}
  `;

  document.querySelector("#excuse").innerHTML = imprimir;
};
