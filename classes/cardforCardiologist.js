import Card from "./card.js";
import renderAfterReloadandDelete from "../functions/renderAfterReloadAndDelete.js";
import instance from "../functions/instance.js";

class CardforCardiologist extends Card{

constructor(id,name,doctor,purpose,description,urgency,pressure,weight,age,disease){

    super(id,name,doctor,purpose,description,urgency)
this._pressure = pressure;
this._weight = weight;
this._age = age;
this._disease =disease;


}

createElements(){
super.createElements();
this.ul.insertAdjacentHTML('beforeend',`
<li><span>Обычное давление:</span>${this._pressure}</li>
<li><span>Индекс массы тела:</span>${this._weight}</li>
<li><span>Возраст:</span>${this._age}</li>
<li><span>Перенесеные заболевания:</span>${this._disease}</li>
`)
this.deleteBtn.addEventListener('click',()=>{
    console.log(this._id)

   const deleteCard = async ()=>{
        const result = await instance.delete(`/${this._id}`)
        console.log(result)
    
    }
    deleteCard()
    localStorage.setItem('deletedcard',this._id)
  
  renderAfterReloadandDelete()
this.cardContainer.remove()
})





}
render(selector){
    this.createElements()


document.querySelector(selector).append(this.cardContainer)
}



}

export default CardforCardiologist