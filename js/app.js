console.log("Working...")

// define variable for transition items
let background = document.querySelector("background-image")
let mainDialogue = document.querySelector("title")
let itemButtons = document.querySelector("buttons")
let choiceButtons = document.querySelector("choice-buttons")

// hide buttons functions
function hideItemButtons() {
    itemButtons.style.display = 'none';
}

function hideChoiceButtons() {
    choiceButtons.style.display = 'none';
}

// function to transition to next background image 
function inventoryTransition() {
    background.src = "project1_assets/inventory-screen.jpg"
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