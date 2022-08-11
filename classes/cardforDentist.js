import Card from "./card.js";

import instance from "../functions/instance.js";

class CardforDentist extends Card{

constructor(id,name,doctor,purpose,description,urgency,datevisited){

    super(id,name,doctor,purpose,description,urgency)
this._dateVisited= datevisited;


}

createElements(){
super.createElements();
this.ul.insertAdjacentHTML('beforeend',`
<li><span>Дата последнего визита:</span>${this._dateVisited}</li>

`)





}
render(selector){
    this.createElements()


document.querySelector(selector).append(this.cardContainer)
}



}

export default CardforDentist
