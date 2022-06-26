// Init width value

let elementTranslate;
elementTranslate = "translateX(100%)";

let elementMaxHeight;
elementMaxHeight = "0";

// get Buttons from DOM  and defined action on click for each

let trainingButton = document.querySelector("#trainingCard");
let experienceButton = document.querySelector("#experienceCard");
let hardSkillsButton = document.querySelector("#languageCard");
let softSkillsButton = document.querySelector("#softSkillsCard");
let interestButton = document.querySelector("#interestCard");

function trainingTranslate() {
  trainingButton.style.transform = `${elementTranslate}`;
  if (`${elementTranslate}` === "translateX(100%)") {
    trainingButton.style.transition = "all 500ms ease-out";
    trainingButton.style.transform = "translateX(0)";
    trainingButton.style.maxHeight = "10000px";
    elementTranslate = "translateX(0)";
    elementMaxHeight = "fit-content";
  } else if (`${elementTranslate}` === "translateX(0)") {
    trainingButton.style.transition = "all 500ms ease-out";
    trainingButton.style.transform = "translateX(100%)";
    trainingButton.style.maxHeight = "0";
    elementTranslate = "translateX(100%)";
    elementMaxHeight = "0";
  }
}

function experiencesTranslate() {
  experienceButton.style.transform = `${elementTranslate}`;
  if (`${elementTranslate}` === "translateX(100%)") {
    experienceButton.style.transition = "all 500ms ease-out";
    experienceButton.style.transform = "translateX(0)";
    experienceButton.style.maxHeight = "10000px";
    elementTranslate = "translateX(0)";
    elementMaxHeight = "fit-content";
  } else if (`${elementTranslate}` === "translateX(0)") {
    experienceButton.style.transition = "all 500ms ease-out";
    experienceButton.style.transform = "translateX(100%)";
    experienceButton.style.maxHeight = "0";
    elementTranslate = "translateX(100%)";
    elementMaxHeight = "0";
  }
}

function hardSkillsTranslate() {
  hardSkillsButton.style.transform = `${elementTranslate}`;
  if (`${elementTranslate}` === "translateX(100%)") {
    hardSkillsButton.style.transition = "all 500ms ease-out";
    hardSkillsButton.style.transform = "translateX(0)";
    hardSkillsButton.style.maxHeight = "10000px";
    elementTranslate = "translateX(0)";
    elementMaxHeight = "fit-content";
  } else if (`${elementTranslate}` === "translateX(0)") {
    hardSkillsButton.style.transition = "all 500ms ease-out";
    hardSkillsButton.style.transform = "translateX(100%)";
    hardSkillsButton.style.maxHeight = "0";
    elementTranslate = "translateX(100%)";
    elementMaxHeight = "0";
  }
}

function softSkillsTranslate() {
  softSkillsButton.style.transform = `${elementTranslate}`;
  if (`${elementTranslate}` === "translateX(100%)") {
    softSkillsButton.style.transition = "all 500ms ease-out";
    softSkillsButton.style.transform = "translateX(0)";
    softSkillsButton.style.maxHeight = "10000px";
    elementTranslate = "translateX(0)";
    elementMaxHeight = "fit-content";
  } else if (`${elementTranslate}` === "translateX(0)") {
    softSkillsButton.style.transition = "all 500ms ease-out";
    softSkillsButton.style.transform = "translateX(100%)";
    softSkillsButton.style.maxHeight = "0";
    elementTranslate = "translateX(100%)";
    elementMaxHeight = "0";
  }
}

function interestTranslate() {
  interestButton.style.transform = `${elementTranslate}`;
  if (`${elementTranslate}` === "translateX(100%)") {
    interestButton.style.transition = "all 500ms ease-out";
    interestButton.style.transform = "translateX(0)";
    interestButton.style.maxHeight = "10000px";
    elementTranslate = "translateX(0)";
    elementMaxHeight = "fit-content";
  } else if (`${elementTranslate}` === "translateX(0)") {
    interestButton.style.transition = "all 500ms ease-out";
    interestButton.style.transform = "translateX(100%)";
    interestButton.style.maxHeight = "0";
    elementTranslate = "translateX(100%)";
    elementMaxHeight = "0";
  }
}
