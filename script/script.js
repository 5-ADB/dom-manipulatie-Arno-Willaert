const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];

// ouder of jonger
const gevragenLeeftijd = document.querySelector("#filterLeeftijd")
leeftijd = gevragenLeeftijd.value

const ouder = document.querySelector("#ouder")
const jonger = document.querySelector("#jonger")

ouder.addEventListener("click", () => {
  console.log(gebruikers.leeftijd>gevragenLeeftijd);

}
)
jonger.addEventListener("click", () => {
  console.log(gebruikers.leeftijd<gevragenLeeftijd);

})

