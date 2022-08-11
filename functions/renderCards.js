import getCards from "./getCards.js";
import Card from "../classes/card.js";
import Filter from "../classes/filter.js";
import filterCards from "./filterFuction.js";
import CardforCardiologist from "../classes/cardforCardiologist.js";
import CardforDentist from "../classes/cardforDentist.js";
import CardforTherapist from "../classes/cardforTherapist.js";


const renderCards = ( )=>{
 const result = async () =>{

 const data = await getCards()



   return data
 }
  let cardsArr = result()


//console.log(cardsArr)

 cardsArr.then(result =>{ console.log(result)



result.forEach(el =>{
       if(el.doctor === 'cardiologist'){
       new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,'заболевания').render('.container')}
      else if(el.doctor ==='dentist'){
        new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
      }
      else{

        new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
      }
      
      
      }
    )




  })

  const filter = new Filter()
  filter.render('.filter_container2')
  document.querySelector('.filter_container2').addEventListener('input',()=>{
    //const container = document.querySelector('.container')
 // container.innerHTML = ''
  filterCards()
  
  })

  return cardsArr
}
export default renderCards
