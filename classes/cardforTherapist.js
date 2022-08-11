import Card from "./card.js";
import renderAfterReloadandDelete from "../functions/renderAfterReloadAndDelete.js";
import instance from "../functions/instance.js";

class CardforTherapist extends Card{

constructor(id,name,doctor,purpose,description,urgency,age){

    super(id,name,doctor,purpose,description,urgency)
    this._age= age;


}

createElements(){
super.createElements();
this.ul.insertAdjacentHTML('beforeend',`
<li><span>Дата последнего визита:</span>${this._age}</li>

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

export default CardforTherapist