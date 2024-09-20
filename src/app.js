/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
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

  function ramdomElement(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  // Decloro el string imprimir, en el se guardan todas las partes de la excusa, se usa += para conservar el valor actual y agregar el valor nuevo
  let Imprimir = "";
  // En los pasos siguientes se usa un random para generar la posicion de cada arreglo segun la cantidad de lapabras que tenga y se guarda en imprimir
  Imprimir =
    who[ramdomElement(who)] +
    " " +
    action[ramdomElement(action)] +
    " " +
    what[ramdomElement(what)] +
    " " +
    when[ramdomElement(when)];
  document.querySelector("#excuse").innerHTML = Imprimir; // cambia la palabra excuse en el HTML por la excusa generada
};
