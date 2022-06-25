// Init translate value

let elementTransform;
elementTransform = "translateX(200%)";

// get Buttons from DOM  and defined action on click for each

let trainingButton = document.querySelector("#trainingCard");
let experienceButton = document.querySelector("#experienceCard");
let hardSkillsButton = document.querySelector("#languageCard");
let softSkillsButton = document.querySelector("#softSkillsCard");
let interestButton = document.querySelector("#interestCard");

function trainingTranslate() {
  trainingButton.style.transform = `${elementTransform}`;
  if (elementTransform === "translateX(200%)") {
    trainingButton.style.transition = "all 500ms ease-out";
    elementTransform = trainingButton.style.transform = "translateX(0%)";
  } else {
    elementTransform = trainingButton.style.transform = "translateX(200%)";
  }
}

function experiencesTranslate() {
  experienceButton.style.transform = `${elementTransform}`;
  if (elementTransform === "translateX(200%)") {
    experienceButton.style.transition = "all 500ms ease-out";
    elementTransform = experienceButton.style.transform = "translateX(0%)";
  } else {
    elementTransform = experienceButton.style.transform = "translateX(200%)";
  }
}
function hardSkillsTranslate() {
  hardSkillsButton.style.transform = `${elementTransform}`;
  if (elementTransform === "translateX(200%)") {
    hardSkillsButton.style.transition = "all 500ms ease-out";
    elementTransform = hardSkillsButton.style.transform = "translateX(0%)";
  } else {
    elementTransform = hardSkillsButton.style.transform = "translateX(200%)";
  }
}
function softSkillsTranslate() {
  softSkillsButton.style.transform = `${elementTransform}`;
  if (elementTransform === "translateX(200%)") {
    softSkillsButton.style.transition = "all 500ms ease-out";
    elementTransform = softSkillsButton.style.transform = "translateX(0%)";
  } else {
    elementTransform = softSkillsButton.style.transform = "translateX(200%)";
  }
}
function interestTranslate() {
  interestButton.style.transform = `${elementTransform}`;
  if (elementTransform === "translateX(200%)") {
    interestButton.style.transition = "all 500ms ease-out";
    elementTransform = interestButton.style.transform = "translateX(0%)";
  } else {
    elementTransform = interestButton.style.transform = "translateX(200%)";
  }
}
