function fetchDogImg() {
  const imgContainer = document.querySelector(".content__images");
  let value = "borzoi";
  for (let i = 0; i < 10; i++) {
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
