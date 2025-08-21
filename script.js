
const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");


hamburg.addEventListener("click", () => {
    dropdown.style.transform = "translateY(0)";
    hamburg.style.display = "none";
    cancel.style.display = "block";
});


cancel.addEventListener("click", () => {
    dropdown.style.transform = "translateY(-500px)";
    cancel.style.display = "none";
    hamburg.style.display = "block";
});


document.querySelectorAll(".dropdown .links a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.style.transform = "translateY(-500px)";
        cancel.style.display = "none";
        hamburg.style.display = "block";
    });
});



const texts = ["DEVELOPER", "DESIGNER", "PROGRAMMER", "GAMER"];
const typingSpeed = 120;   
const erasingSpeed = 60;   
const delayBetweenWords = 1000; 
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenWords);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; 
    setTimeout(typeWriter, typingSpeed);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);
