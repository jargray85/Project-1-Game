console.log("Working...")

// define variable for transition items
let background = document.querySelector(".background-image");
let mainDialogue = document.querySelector(".title")
let subTitle = document.querySelector(".subtitle")
let prologueOne = document.querySelector(".prologue1")
let prologueTwo = document.querySelector(".prologue2")
let itemButtons = document.querySelector(".buttons")
let choiceButtons = document.querySelector(".choice-buttons")
let monsterOne = document.querySelector(".monster1")
let monsterTwo = document.querySelector(".monster2")
let monsterThree = document.querySelector(".monster3")

// show/hide buttons functions
function showItemButtons() {
    itemButtons.style.display = 'flex';
}

function showChoiceButtons() {
    choiceButtons.style.display = 'flex';
}

function showMonsterOne() {
    monsterOne.style.display = 'flex';
}

function showMonsterTwo() {
    monsterTwo.style.display = 'flex';
}

function showMonsterThree() {
    monsterThree.style.display = 'flex';
}

// function to transition to next background image 
function inventoryTransition() {
    let background = document.querySelector(".background-image");
    background.src = "project1_assets/inventory-screen.jpg";
    mainDialogue.style.display = "none";
    subTitle.style.display = "none";
    
}

function monsterOneTransition() {
    background.src = "project1_assets/monster1-background.jpg"
}

function monsterTwoTransition() {
    background.src = "project1_assets/monster2-background.jpg"
}

function monsterThreeTransition() {
    background.src = "project1_assets/monster3-background.jpg"
}

// Click functions
background.addEventListener("click", () => {
    inventoryTransition();
})