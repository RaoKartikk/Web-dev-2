const from= document.querySelector('.form');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(eventTitle.value);
    console.log(eventDate.value);
    console.log(category.value);
    console.log(description.value);
})

from.addEventListener('submit', (e) => {
   let title=eventTitle.value;
   let date=eventDate.value;
   let categoryValue=category.value;
   let descriptionValue=description.value;

 const card=document.createElement('div');
 card.classList.add('card');
    card.innerHTML=` 
    <h3>${title}</h3>
    <p>${date}</p>
    <button>${categoryValue}</button>
    <p>${descriptionValue}</p>
    `;
    eventCards.appendChild(card);

    const dlt=card.querySelector('.dlt'); 
    dlt.addEventListener('click', () => {
        card.remove(card);

})