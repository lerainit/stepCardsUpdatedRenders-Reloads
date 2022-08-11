import Card from "../classes/card.js"

const filterCards = () =>{
let target = event.target

const cardsForFilter = JSON.parse(localStorage.getItem('cards'))
console.log(cardsForFilter)

console.log( typeof  +target.value)

let filteredCards;


filteredCards =cardsForFilter.filter(({doctor,name,description,urgency,purpose}) =>doctor.includes(target.value) || name.includes(target.value) || urgency.includes(target.value) || description.includes(target.value) || purpose.includes(target.value))
console.log(filteredCards)



const container = document.querySelector('.container')
container.innerHTML = ''
filteredCards.forEach(el =>     new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container'))

if(target.value === ''){
    cardsForFilter.forEach(el =>     new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container'))

}


}

export default  filterCards;
