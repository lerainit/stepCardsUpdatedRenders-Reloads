
import getCards from "../functions/getCards.js";
import instance from "../functions/instance.js";
//import deleteCard from "../functions/deleteCard.js";
//import renderAfterReloadandDelete from "../functions/renderAfterReloadAndDelete.js";
//import renderAfterReloadandDelete from "../functions/renderAfterReloadAndDelete.js";

class Card{
constructor(id,name,doctor,purpose,description,urgency){
this._purpose = purpose;
this._id = id
this._description = description;
this._name = name;
this.doctor = doctor;
this._urgency = urgency;
this.cardContainer = document.createElement('div')
this.showMoreBtn = document.createElement('button')
this.deleteBtn = document.createElement('button')
this.editBtn = document.createElement('button')
this.ul = document.createElement('ul')
  

    
}
createElements(){
   
this.cardContainer.classList.add('card_container')
this.cardContainer.draggable = 'true'
this.showMoreBtn.classList.add('show_btn')
this.deleteBtn.classList.add('delete_btn')
this.editBtn.classList.add('edit_btn')
this.showMoreBtn.innerHTML ='Показать больше'
this.deleteBtn.innerHTML = 'Удалить'
this.editBtn.innerHTML = 'Редактировать'
this.ul.classList.add('show_more')
   
this.cardContainer.append(this.editBtn)
this.cardContainer.append(this.deleteBtn)

this.cardContainer.insertAdjacentHTML('beforeend',`
<ul>
<li><span>ФИО:</span>${this._name}</li>
<li><span>Доктор:</span>${this.doctor}</li>
</ul>
`)

this.cardContainer.append(this.showMoreBtn)


this.showMoreBtn.addEventListener('click',()=>{

const showMore = document.querySelector('.show_more')
if(showMore){showMore.remove()
}
this.cardContainer.append(this.ul)
   this.ul.insertAdjacentHTML('beforeend',`

<li><span>Цель визита:</span>${this._purpose}</li>
<li><span>Краткое описание визита:</span>${this._description}</li>
<li><span>Срочность:</span>${this._urgency}</li>


    `)
   document.querySelectorAll('.card_container').forEach(el =>el.style.height = '170px' )
this.cardContainer.style.height = '300px'
})
/*this.deleteBtn.addEventListener('click',()=>{
    console.log(this._id)

   const deleteCard = async ()=>{
        const result = await instance.delete(`/${this._id}`)
        console.log(result)
    
    }
    deleteCard()
    localStorage.setItem('deletedcard',this._id)
  renderAfterReloadandDelete()
 // this.cardContainer.remove()  
})*/



  

  
}
render(selector){
this.createElements()


document.querySelector(selector).append(this.cardContainer)

}
    
}





export default Card;
