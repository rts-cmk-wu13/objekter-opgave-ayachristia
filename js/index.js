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

// --------------header region

// left home button //
const homeBtn = document.createElement("a");
homeBtn.classList.add("header__homebtn");

const homeIcon = document.createElement("span");
homeIcon.classList.add("header__homebtn-icon", "material-symbols-outlined");
homeIcon.textContent = `deployed_code`;
homeBtn.append(homeIcon);

headerContainerEl.append(homeBtn);

// right member button //

const memberMenu = document.createElement("button");
memberMenu.classList.add("header__member-menu");

const memberIconArrow = document.createElement("span");
memberIconArrow.classList.add(
  "header__member-iconArrow",
  "material-symbols-outlined"
);
memberIconArrow.textContent = `keyboard_arrow_down`;

const memberIconPerson = document.createElement("span");
memberIconPerson.classList.add(
  "header__member-iconPerson",
  "material-symbols-outlined"
);
memberIconPerson.textContent = `person`;

memberMenu.append(memberIconArrow, memberIconPerson);

headerContainerEl.append(memberMenu);

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

// ------------services region

services.forEach((service) => {
  //create article
  const serviceArticle = document.createElement("article");
  serviceArticle.classList.add("service");
  //create img
  const serviceImage = document.createElement("img");
  serviceImage.classList.add("service__image");
  serviceImage.src = service.illustration;

  //create h2
  const serviceHeadline = document.createElement("h2");
  serviceHeadline.classList.add("service__headline");
  serviceHeadline.textContent = service.headline;

  //create p
  const serviceText = document.createElement("p");
  serviceText.classList.add("service__text");
  serviceText.textContent = service.text;
  //create a
  const serviceLinkText = document.createElement("a");
  serviceLinkText.classList.add("service__link-text");
  serviceLinkText.href = "#";
  serviceLinkText.textContent = service.linktext;

  serviceArticle.append(
    serviceImage,
    serviceHeadline,
    serviceText,
    serviceLinkText
  );
  servicesContainerEl.append(serviceArticle);
});

// -----------------facilities region
const facilitiesHeadline = document.createElement("h1");
facilitiesHeadline.classList.add("facilities__headline");
facilitiesHeadline.textContent = facilities.headline;
facilitiesContainerEl.append(facilitiesHeadline);

//creater section holding the next sections
const facilitiesListEl = document.createElement("section");
facilitiesListEl.classList.add("facilities__list-container");

facilities.options.forEach((facility) => {
  //create section for each
  const facilitySection = document.createElement("section");
  facilitySection.classList.add("facility__section");

  //create img for icon
  const facilityImage = document.createElement("img");
  facilityImage.classList.add("facility__img-icon");
  facilityImage.src = facility.icon;
  //create h2
  const facilityHeadline = document.createElement("h2");
  facilityHeadline.classList.add("facility__headline");
  facilityHeadline.textContent = facility.headline;
  //create p
  const facilityText = document.createElement("p");
  facilityText.classList.add("facility__text");
  facilityText.textContent = facility.text;
  //create button
  const facilityBtn = document.createElement("button");
  facilityBtn.classList.add("facility__btn");
  facilityBtn.textContent = `Show me more`;

  facilitySection.append(
    facilityImage,
    facilityHeadline,
    facilityText,
    facilityBtn
  );
  facilitiesListEl.append(facilitySection);
});

facilitiesContainerEl.appendChild(facilitiesListEl);
// -----------------site region

//create article for 1st element
const sitesArticle = document.createElement("article");
sitesArticle.classList.add("sites__article");
//create innerhtml for 1st element
sitesArticle.innerHTML = `
<h1 class="sites__article-headline">${sites.headline}</h1>
<p class="sites__article-text">${sites.text}</p>
<button class="sites__article-btn">
<img src="${sites.btnicon}" alt="play icon" class="sites__article-btnicon">
 Start</button>
`;
sitesContainerEl.append(sitesArticle);

//create section for 2nd elements
const sitesSection = document.createElement("section");
sitesSection.classList.add("sites__section");
//create foreach with create section for each element places
sites.places.forEach((place) => {
  const placeSection = document.createElement("section");
  placeSection.classList.add("sites__place");
  placeSection.innerHTML = `
    <img class="sites__place-image" src="${place.img}" alt="${place.name}">
    <h2 class="sites__place-headline">${place.name}</h2>
    <p class="sites__place-text">${place.city}</p>
    <button class="sites__place-btn">View the Site</button>
    `;
  sitesSection.append(placeSection);
});

sitesContainerEl.append(sitesSection);

// ----------------advantages region

const advantagesHeadline = document.createElement("h1");
advantagesHeadline.classList.add("advantages__headline");
advantagesHeadline.textContent = `Our Advantages`;
advantagesContainerEl.append(advantagesHeadline);

const advantagesSection = document.createElement("section");
advantagesSection.classList.add("advantages__section");

advantages.forEach((advantage) => {
  const advantageSection = document.createElement("section");
  advantageSection.classList.add("advantage");

  advantageSection.innerHTML = `
    <img class="advantage__image" src="${advantage.icon}"></img>
    <h2 class="advantage__headline">${advantage.headline}</h2>
    <p class="advantage__text">${advantage.text}</p>

    `;
  advantagesSection.append(advantageSection);
});

advantagesContainerEl.append(advantagesSection);

// ------------footer region
