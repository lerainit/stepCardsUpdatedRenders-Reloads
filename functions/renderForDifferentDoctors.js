import CardforDentist from "../classes/cardforDentist.js";
import CardforCardiologist from "../classes/cardforCardiologist.js";
import CardforTherapist from "../classes/cardforTherapist.js";

const renderCardForDifferentDoctors = (el) =>{


    if(el.doctor === 'cardiologist'){
    new CardforCardiologist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.pressure,el.weight,el.age,'заболевания').render('.container')}
   else if(el.doctor ==='dentist'){
     new CardforDentist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.lastVisitDate).render('.container')
   }
   else{

     new CardforTherapist(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency,el.age).render('.container') 
   }
   
   
   }
 


export default renderCardForDifferentDoctors;