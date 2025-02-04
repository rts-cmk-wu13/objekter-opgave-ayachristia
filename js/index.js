// slå dig løs her...

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

const headerContainerEl = document.querySelector(".header");
const heroContainerEl = document.querySelector(".hero");
const servicesContainerEl = document.querySelector(".services");
const facilitiesContainerEl = document.querySelector(".facilities");
const sitesContainerEl = document.querySelector(".sites");
const advantagesContainerEl = document.querySelector(".advantages");
const footerContainerEl = document.querySelector(".footer");

// -----------hero region
//image
const heroImage = document.createElement("img");
heroImage.classList.add("hero__image");
heroImage.src = hero.image;

//+ section with:
const heroTextContent = document.createElement("section");
heroTextContent.classList.add("hero__textcontent");

// h1
const heroHeadline = document.createElement("h1");
heroHeadline.classList.add("hero__headline");
heroHeadline.innerHTML = hero.headline.replace(
  `save your time`,
  `<span>save your time</span>`
);
const headlineSpan = heroHeadline.querySelector("span");
headlineSpan.classList.add("hero__headline-span");
// heroHeadline.textContent = hero.headline;

// p
const heroPara = document.createElement("p");
heroPara.classList.add("hero__para");
heroPara.textContent = hero.copy;
// button
const heroBtn = document.createElement("button");
heroBtn.classList.add("hero__btn");
const heroBtnImg = document.createElement("img");
heroBtnImg.classList.add("hero__btn-image");
heroBtnImg.src = hero.icon;
heroBtn.appendChild(heroBtnImg);
heroBtn.appendChild(document.createTextNode("Explore"));

//appending
heroContainerEl.append(heroImage);
heroTextContent.append(heroHeadline, heroPara, heroBtn);
heroContainerEl.append(heroTextContent);
