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
let m1Tent = document.querySelector(".m1-tent")
let m1Compass = document.querySelector(".m1-compass")
let m1Text = document.querySelector(".m1-text")
let m2Text = document.querySelector(".m2-text")
let m2Axe = document.querySelector(".m2-axe")
let m2Bonfire = document.querySelector(".m2-bonfire")
let m2Flashlight = document.querySelector(".m2-flashlight")
let m3Text = document.querySelector(".m3-text")
let m3Compass = document.querySelector(".m3-compass")
let m3Axe = document.querySelector(".m3-axe")
let m3Flashlight = document.querySelector(".m3-flashlight")
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

// function to transition to Prologue
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

// Function to transition to inventory screen
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

// Function to move on to the first monster
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
        m1Tent.style.display = "block";
        monsterTwoTransition();
    })
    compass.addEventListener("click", () => {
        m1Text.style.display = "none";
        m1Compass.style.display = "block";
        const gameOver = setInterval(() => {
            background.src = "project1_assets/game-over-background.jpg";
            monsterOne.style.display = "none";
            coat.style.display = "none";
            compass.style.display = "none";
            tent.style.display = "none";
            m1Compass.style.display = "none";
            gameOver1.style.display = "block";
            gameOver2.style.display = "block";
        }, 4500)
    })
}

// Function to move onto the second Monster
function monsterTwoTransition() {
    const monsterTwoStart = setInterval(() => {
        background.src = "project1_assets/monster2-background.jpg";
        monsterOne.style.display = "none";
        monsterTwo.style.display = "inline-block";
        m1Tent.style.display = "none";
        m1Jacket.style.display = "none";
        coat.style.display = "none";
        compass.style.display = "none";
        tent.style.display = "none";
        axe.style.display = "flex";
        bonfire.style.display = "flex";
        flashlight.style.display = "flex";
        m2Text.style.display = "block";
    }, 4500)
    axe.addEventListener("click", () => {
        clearInterval(monsterTwoStart);
        m2Text.style.display = "none";
        m2Axe.style.display = "block";
        const gameOver = setInterval(() => {
            monsterTwo.style.display = "none";
            axe.style.display = "none";
            flashlight.style.display = "none";
            bonfire.style.display = "none";
            m2Text.style.display = "none";
            m2Axe.style.display = "none";
            background.src = "project1_assets/game-over-background.jpg";
            gameOver1.style.display = "block";
            gameOver2.style.display = "block";
        }, 4500)
    })
    bonfire.addEventListener("click", () => {
        clearInterval(monsterTwoStart);
        m2Text.style.display = "none";
        m2Bonfire.style.display = "block";
        monsterThreeTransition();
    })
    flashlight.addEventListener("click", () => {
        clearInterval(monsterTwoStart);
        m2Text.style.display = "none";
        m2Flashlight.style.display = "block";
        const gameOver = setInterval(() => {
            monsterTwo.style.display = "none";
            axe.style.display = "none";
            flashlight.style.display = "none";
            bonfire.style.display = "none";
            m2Text.style.display = "none";
            m2Flashlight.style.display = "none";
            background.src = "project1_assets/game-over-background.jpg";
            gameOver1.style.display = "block";
            gameOver2.style.display = "block";
        }, 4500)
    })
}

// Function to move onto the third monster
function monsterThreeTransition() {
    const monsterThreeStart = setInterval(() => {
        background.src = "project1_assets/monster3-background.jpg";
        monsterTwo.style.display = "none";
        monsterThree.style.display = "inline-block";
        axe.style.display = "block";
        flashlight.style.display = "block";
        compass.style.display = "block";
        bonfire.style.display = "none";
        m2Text.style.display = "none";
        m2Bonfire.style.display = "none";
        m3Text.style.display = "block";
    }, 4500)
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