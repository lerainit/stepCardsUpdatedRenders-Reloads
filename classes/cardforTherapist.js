import Card from "./card.js";

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





}
render(selector){
    this.createElements()


document.querySelector(selector).append(this.cardContainer)
}



}

export default CardforTherapist
