const nameText = document.querySelector(".home__username");
const techList = document.querySelector(".about__technologies");

const ENDPOINT =
  "https://api.github.com/gists/9b66ecf99b2eb53799a9b52f11a71f43";

async function getData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return JSON.parse(data.files["me.json"].content);
}

function displayData({ name, tech, projects }) {
  nameText.textContent = name;
  for (t of tech) {
    techList.innerHTML += `<li>${t}</li>`;
  }
}

window.addEventListener("load", async () => {
  const data = await getData();

  displayData(data);
});
