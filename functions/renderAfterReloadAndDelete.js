
import CardforCardiologist from "../classes/cardforCardiologist.js"
import CardforDentist from "../classes/cardforDentist.js"
import CardforTherapist from "../classes/cardforTherapist.js"
import createLogin from "./createLogin.js"
import createCards from "./createCards.js"
import Filter from "../classes/filter.js"

 const renderAfterReloadandDelete = ()=>{
    const delCard =  localStorage.getItem('deletedcard') 

const cardsArrJSOn = localStorage.getItem('cards')

const cardsArr = JSON.parse(cardsArrJSOn)



const newcardsArr = cardsArr.filter(el => el.id !== +delCard)

console.log(newcardsArr)
console.log(cardsArr)

const newCardsArrJSon = JSON.stringify(newcardsArr)

localStorage.setItem('cards',newCardsArrJSon)

console.log(delCard)




 }
export default renderAfterReloadandDelete