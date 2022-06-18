const inputField = document.querySelector(".input-field");
const inputFieldContainer = document.querySelector(".inputField-container");
const arrOfWords = [
  "adobo",
  "kaldereta",
  "sinigang",
  "hotdog",
  "tuna",
  "menudo",
  "nilaga",
  "ginisa",
  "kare-kare",
  "kambing",
  "kalabaw",
];

function startChecking() {
  inputField.addEventListener("input", () => {
    if (inputField.value == "") {
      clearDropdown(inputFieldContainer);
      return;
    }

    let matchedWords = [];

    arrOfWords.forEach((word) => {
      if (word.substring(0, inputField.value.length) == inputField.value) {
        matchedWords.push(word);
      } else clearDropdown();
    });

    for (let i = 0; i < matchedWords.length; i++) {
      let div = document.createElement("div");
      div.classList.add("dropdown");
      div.textContent = matchedWords[i];
      if (hasExistingDiv(inputFieldContainer, matchedWords[i]));
      else inputFieldContainer.appendChild(div);
    }
  });
}

function clearDropdown() {
  inputFieldContainer
    .querySelectorAll(".dropdown")
    .forEach((dropdown) => inputFieldContainer.removeChild(dropdown));
}

function hasExistingDiv(content) {
  inputFieldContainer.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (dropdown.textContent === content) {
      inputFieldContainer.removeChild(dropdown);
      return true;
    }
  });
  return false;
}

export { startChecking };
