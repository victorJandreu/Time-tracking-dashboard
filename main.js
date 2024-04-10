
import file from "./data.json" with { type: "json" };

const root = document.getElementById("root")
const dailyBtn = document.getElementById("daily")
const weeklyBtn = document.getElementById("weekly")
const monthlyBtn = document.getElementById("monthly")

const arrayImage = [
    "./images/icon-work.svg",
    "./images/icon-play.svg",
    "./images/icon-study.svg",
    "./images/icon-exercise.svg",
    "./images/icon-social.svg",
    "./images/icon-self-care.svg",
]

const backgroundColor = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
]

function createCard(moment){
let contador = 0
  const cardArray =  file.map(card => {

   
        let cardDiv = `
        <div class="card">
        <div class="background" style="background-color:${backgroundColor[contador]}">
          <img src=${arrayImage[contador]} alt="work icon">
        </div>
        <div class="flex">
          <div >
            <h2>${card.title}</h2>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
          </div>
          <div>
            <p class="highLetter">${plural(card.timeframes[moment].current, "hr")}</p>
            <p class="small">Last day - ${plural(card.timeframes[moment].previous, "hr")}</p>
            
          </div>
        </div>
      </div>
        `
        contador++
        return cardDiv
    })

    root.innerHTML = cardArray.join("")
    
}

createCard("daily")
// preparar BOTONES Y DARLES LA CLASE ACTIVE CON COLOR BLANCO AL PULSARLOS

dailyBtn.addEventListener("click", (e) => {
    createCard("daily")
    ponerActive(e)
})

weeklyBtn.addEventListener("click", (e) => {
    createCard("weekly")
    ponerActive(e)
})

monthlyBtn.addEventListener("click", (e) => {
    createCard("monthly")
    ponerActive(e)
})


function ponerActive(e) {
    document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
    e.target.classList.add("active")
}

function plural(elementoChequear, textoSinS){
    if (elementoChequear === 1) { return elementoChequear + textoSinS}
    else { return elementoChequear + textoSinS + "s"}
}


/*
 <div class="card">
        <div class="background">
          <img src="./images/icon-work.svg" alt="work icon">
        </div>
        <div class="flex">
          <div >
            <h2>Work</h2>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
          </div>
          <div>
            <p class="highLetter">5hrs</p>
            <p class="small">Last day - 7hrs</p>
            
          </div>
        </div>
      </div>


*/