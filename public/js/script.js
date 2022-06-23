// Get the back to top button
const BUTTON = document.querySelector("#BackToTopBtn");

// display button when the user scroll down
window.onscroll = function () {
  showButton();
};

function showButton() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    BUTTON.style.display = "block";
  } else {
    BUTTON.style.display = "none";
  }
}

//  When user click on the button, automatic scroll to the top of document

function backToTop() {
  document.body.scrollTop = 0; // For Safari users
  document.documentElement.scrollTop = 0; // for FireFox, Chrome, Edge and Opera users
}
