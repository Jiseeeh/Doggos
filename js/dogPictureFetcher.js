function fetchDogImg(value) {
  const imgContainer = document.querySelector(".content__images");
  imgContainer.innerHTML = ""

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
