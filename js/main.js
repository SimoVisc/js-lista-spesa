"use strict"
// creo la lista della spesa
const shoppingList=["pane","pomodori","tonno","uova", "latte"]
// per ogni elemento della lista creo un elemento <li>
let i=0
const listContainer= document.getElementById("list")
while(i<shoppingList.length){
    const listItem= document.createElement("li");
    listItem.innerHTML=shoppingList[i]
    listContainer.append(listItem)

}
