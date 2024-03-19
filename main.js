// Menue

let BurgerMenue = document.querySelector(".menu-icon");
let Menue = document.querySelector(".MENU-Mobile");
function MENU (){
  Menue.classList.add("open")
}

function Close (){
  Menue.classList.remove("open");
}


// Drow Dawn

let Maps = document.querySelector(".Maps");
let DrowDawnMaps = document.querySelector(".DrowDawnMaps");

function DrowDawnMove(){
  DrowDawnMaps.style.display = "block"
}

function DrowDawnOut(){
  DrowDawnMaps.style.display = "none"
}




