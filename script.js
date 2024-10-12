function showSeason(season) {
  const bodyElement = document.getElementById("body");
  const seasonImage = document.getElementById("seasonImage");
  const titleElement = document.getElementById("title")

  if (season == "summer") {
    seasonImage.src = "./img/sun.png";
    bodyElement.style.backgroundColor = "#ffd633";
    titleElement.innerText = "Summer"
  } else if (season == "winter") {
    seasonImage.src = "./img/winter.png";
    bodyElement.style.backgroundColor = "#66b0ff";
    titleElement.innerText = "Winter"
  } else if (season == "monsoon") {
    seasonImage.src = "./img/monsoon.png";
    bodyElement.style.backgroundColor = "#5bd778";
    titleElement.innerText = "Monsoon"
  }
}
