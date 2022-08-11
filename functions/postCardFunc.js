import Card from "../classes/card.js"
import instance from "./instance.js"
import renderAfterReloadwithAddedCard from "./renderCardsAfterAddNewCardAndReload.js"
import renderCardForDifferentDoctors from "./renderForDifferentDoctors.js"


const postNewCards = async (obj) =>{
   
  
    const {status,data} =  await instance.post('',obj)
       console.log(data)
     // const newCard = new Card(data.id,data.name,data.doctor,data.purpose,data.description,data.urgency)
     // newCard.render('.container')
        renderCardForDifferentDoctors(data)

      localStorage.setItem('newcard',JSON.stringify(data))
          
  renderAfterReloadwithAddedCard() 

   }

   export default postNewCards