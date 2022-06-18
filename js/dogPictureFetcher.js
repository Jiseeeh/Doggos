function fetchDogImg(value) {
  const imgContainer = document.querySelector(".content__images");
  const numberOfImg = prompt("How many images do you want? ");

  if (parseInt(numberOfImg) > 100 || parseInt(numberOfImg) <= 0) {
    prompt("Please input properly.");
    return;
  }

  for (let i = 0; i < parseInt(numberOfImg); i++) {
    fetch(`https://dog.ceo/api/breed/${value}/images/random`)
      .then((response) => response.text())
      .then((data) => {
        const imgLink = JSON.parse(data)["message"];

        let img = document.createElement("img");
        img.classList.add("grid__item");
        img.src = imgLink;
        imgContainer.appendChild(img);
      });
  }
}

export { fetchDogImg };
