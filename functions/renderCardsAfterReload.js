
import Card from "../classes/card.js"
import createLogin from "./createLogin.js"
import createCards from "./createCards.js"
import Filter from "../classes/filter.js"
import CardforCardiologist from "../classes/cardforCardiologist.js"
import CardforDentist from "../classes/cardforDentist.js"
import CardforTherapist from "../classes/cardforTherapist.js"
import filterCards from "./filterFuction.js"

function renderCardsAfterReload(){
    let cardsArr = JSON.parse(localStorage.getItem('cards'))
    
    console.log(cardsArr)

    
      
     cardsArr.forEach(el =>{
    
      
      
      if(el.doctor === 'cardiologist'){
        new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,'заболевания').render('.container')}
       else if(el.doctor ==='dentist'){
         new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastvisitdate).render('.container')
       }
       else{
 
         new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
       }
       
      })

  const loginBtn = document.querySelector('.login_btn')
    loginBtn.innerHTML = 'Cоздать новую карту'
      loginBtn.removeEventListener('click',createLogin)

     loginBtn.addEventListener('click',createCards)

     const filter = new Filter()
     filter.render('.filter_container2')
     document.querySelector('.filter_container2').addEventListener('input',()=>{
      //const container = document.querySelector('.container')
   // container.innerHTML = ''
    filterCards()
    
    })
    
    }

    export default renderCardsAfterReload
