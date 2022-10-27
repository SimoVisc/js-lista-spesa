"use strict"
// creo la lista della spesa
const shoppingList=[
    "pane",
    "pomodori",
    "tonno",
    "uova", 
    "latte"
]
// per ogni elemento della lista creo un elemento <li>
let i=0
const Container= document.getElementById("list")
while(i<shoppingList.length){
    Container.innerHTML+= ` <li>${shoppingList[i]}</li>`
}
console.log(shoppingList[i],  Container )
