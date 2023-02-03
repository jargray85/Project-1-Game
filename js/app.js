console.log("Working...")

// define variable for elements
let background = document.querySelector(".background-image");
let mainDialogue = document.querySelector(".title")
let subTitle = document.querySelector(".subtitle")
let prologueOne = document.querySelector(".prologue1")
let prologueTwo = document.querySelector(".prologue2")
let inventoryText = document.querySelector(".inventory-message")
let proceed = document.querySelector(".proceed")
let itemButtons = document.querySelector(".buttons")
let choiceButtons = document.querySelector(".choice-buttons")
let yesButton = document.querySelector(".yes-button")
let noButton = document.querySelector(".no-button")
let okButton = document.querySelector(".ok-button")
let m1Jacket = document.querySelector(".m1-jacket")
let m1tent = document.querySelector(".m1-tent")
let m1compass = document.querySelector(".m1-compass")
let monsterOne = document.querySelector(".monster1")
let monsterTwo = document.querySelector(".monster2")
let monsterThree = document.querySelector(".monster3")
let bonfire = document.querySelector(".bonfire-button")
let axe = document.querySelector(".axe-button")
let compass = document.querySelector(".compass-button")
let flashlight = document.querySelector(".flashlight-button")
let tent = document.querySelector(".tent-button")
let coat = document.querySelector(".coat-button")
let gameOver1 = document.querySelector(".game-over1")
let gameOver2 = document.querySelector(".game-over2")
let m1Text = document.querySelector(".m1-text")

// function to transition to next background image 
function prologueTransition() {
    let background = document.querySelector(".background-image");
    background.src = "project1_assets/inventory-screen.jpg";
    background.style.marginTop = "0";
    mainDialogue.style.display = "none";
    subTitle.style.display  = "none";
    prologueOne.style.display = "block";
    const prologueTwoInit = setInterval(() => {
        prologueTwo.style.display = "block";
    }, 5000);
    const proceedInit = setInterval(() => {
        proceed.style.display = "flex";
    }, 7000);
    const choiceInit = setInterval(() => {
        yesButton.style.display = "inline";
        noButton.style.display = "inline";
    }, 8000);
    yesButton.onclick = function() {
        clearInterval(prologueTwoInit);
        clearInterval(proceedInit);
        clearInterval(choiceInit);
        prologueOne.style.display = "none";
        prologueTwo.style.display = "none";
        proceed.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }
    noButton.onclick = function() {
        clearInterval(prologueTwoInit);
        clearInterval(proceedInit);
        clearInterval(choiceInit);
        prologueOne.style.display = "none";
        prologueTwo.style.display = "none";
        proceed.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        background.src = "project1_assets/game-over-background.jpg";
        gameOver1.style.display = "block";
        gameOver2.style.display = "block";
    }
}

function inventoryTransition() {
    background.style.marginTop = "0%";
    prologueOne.style.display = "none";
    prologueTwo.style.display = "none";
    proceed.style.display = "none";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    bonfire.style.display = "flex";
    axe.style.display = "flex";
    compass.style.display = "flex";
    flashlight.style.display = "flex";
    tent.style.display = "flex";
    coat.style.display = "flex";
    inventoryText.style.display = "block";
    const okBtn = setInterval(() => {
        okButton.style.display = "inline";
    }, 3000);
    okButton.onclick = function() {
        clearInterval(okBtn);
    }
}

function monsterOneTransition() {
    background.src = "project1_assets/monster1-background.jpg";
    background.style.marginTop = "0";
    monsterOne.style.display = "inline-block";
    okButton.style.display = "none";
    inventoryText.style.display = "none";
    m1Text.style.display = "block";
    axe.style.display = "none";
    bonfire.style.display = "none";
    flashlight.style.display = "none";
    coat.addEventListener("click", () => {
        m1Text.style.display = "none";
        m1Jacket.style.display = "block";
        monsterTwoTransition();
    })
    tent.addEventListener("click", () => {
        m1Text.style.display = "none";
        m1tent.style.display = "block";
        monsterTwoTransition();
    })
    compass.addEventListener("click", () => {
        m1Text.style.display = "none";
        m1compass.style.display = "block";
        const gameOver = setInterval(() => {
            background.src = "project1_assets/game-over-background.jpg";
            monsterOne.style.display = "none";
            coat.style.display = "none";
            compass.style.display = "none";
            tent.style.display = "none";
            m1compass.style.display = "none";
            gameOver1.style.display = "block";
            gameOver2.style.display = "block";
        }, 4500)
    })
}

function monsterTwoTransition() {
    const monsterTwoStart = setInterval(() => {
        background.src = "project1_assets/monster2-background.jpg";
        monsterOne.style.display = "none";
        monsterTwo.style.display - "inline-block";
    }, 4500)
}

function monsterThreeTransition() {
    background.src = "project1_assets/monster3-background.jpg"
}

// Click functions
background.addEventListener("click", () => {
    prologueTransition();
})

yesButton.addEventListener("click", () => {
    inventoryTransition();
})

noButton.addEventListener("click", () => {
    gameOverTransition();
})

okButton.addEventListener("click", () => {
    monsterOneTransition();
})