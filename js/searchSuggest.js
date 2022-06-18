const inputField = document.querySelector(".input-field");
const inputFieldContainer = document.querySelector(".inputField-container");
import { fetchDogImg } from "./dogPictureFetcher.js";
const arrOfWords = [
  "Akita",
  "Appenzeller",
  "Chow",
  "Cardigan Corgi",
  "Dachshund",
  "Great Dane",
  "Doberman",
  "Shiba",
  "Husky",
  "Shihtzu",
  "Spaniel",
  "Terrier",
  "Waterdog",
  "Tervuren",
  "Vizsla",
  "Weimaraner",
  "Whippet",
  "Samoyed",
  "Saluki",
  "Schipperke",
  "Pyrenees",
  "Redbone",
];

function startChecking() {
  isDropdownClicked();
  inputField.addEventListener("input", () => {
    if (inputField.value == "") {
      clearDropdown(inputFieldContainer);
      return;
    }

    let matchedWords = [];

    arrOfWords.forEach((word) => {
      if (
        word.substring(0, inputField.value.length).toLowerCase() ==
        inputField.value
      ) {
        matchedWords.push(word);
      } else clearDropdown();
    });

    for (let i = 0; i < matchedWords.length; i++) {
      let div = document.createElement("div");
      div.classList.add("dropdown");
      div.textContent = matchedWords[i];
      if (hasExistingDiv(inputFieldContainer, matchedWords[i])) continue;
      inputFieldContainer.appendChild(div);

      if (isDropdownClicked()) break;
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

function isDropdownClicked() {
  inputFieldContainer.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      inputField.value = dropdown.textContent;
      clearDropdown();
      fetchDogImg(inputField.value.toLowerCase());
      return true;
    });
  });
}

export { startChecking };
