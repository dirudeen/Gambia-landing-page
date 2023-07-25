const places = [
  {
    img: "./images/Arch.jpg",
    country: "Banjul - The Gambia",
    place: "Banjul Arch",
    outline: `The Arch at Banjul, also known as the Banjul Arch,
        is a prominent historical landmark located in the city of Banjul,
        the capital of The Gambia. Situated on Independence Drive,
        the arch serves as a symbol of the nation's independence and 
        is of significant cultural and historical importance.`,
  },

  {
    img: "./images/fajara.png",
    country: "Fajara - The Gambia",
    place: "Water Front",
    outline: `Fajara is a coastal suburb in The Gambia known for 
    its serene beaches and lush greenery. It is a popular
    destination for tourists seeking a peaceful retreat,
    offering a blend of natural beauty and charming local culture.
    Fajara's relaxed ambiance and stunning surroundings make it a
    sought-after spot for travelers in the region.`,
  },

  {
    img: "./images/fort bullen.webp",
    country: "Barra - The Gambia",
    place: "Fort Bullen",
    outline: `Fort Bullen is a historic fort located in Barra, The Gambia. Built by the British during the colonial period, it served as a strategic military outpost guarding the River Gambia's mouth. Today, it stands as a popular tourist destination, offering visitors a glimpse into the region's history and stunning views of the river and its surroundings..`,
  },

  {
    img: "./images/Kachikally-Crocodile-Pool.jpg",
    country: "Bakau - The Gambia",
    place: "Kachikally Crocodile Pool",
    outline: `The Bakau Crocodile Pool, is a renowned tourist attraction known for its large population of Nile crocodiles. Visitors can observe these majestic creatures in their natural habitat while being guided by experienced local handlers. The site offers a unique and thrilling opportunity to get up close with one of nature's most fearsome predators.`,
  },

  {
    img: "./images/king-fahad.jpg",
    country: "Banjul - The Gambia",
    place: "King Fahad Mosque",
    outline: `The King Fahad Mosque, is an impressive symbol of Islamic architecture and cultural heritage. Built by the late King Fahad of Saudi Arabia, the mosque stands as one of the largest and most significant religious landmarks in the country, attracting visitors and worshippers alike from around the world. With its stunning design and serene surroundings, the mosque offers a peaceful and spiritually enriching experience.`,
  },

  {
    img: "./images/senegambia.jpg",
    country: "Senegambia - The Gambia",
    place: "Kalipso Beach",
    outline: `Senegambia, located in Gambia, refers to a unique region that encompasses both Gambia and parts of Senegal. It is a popular tourist destination known for its beautiful beaches, vibrant culture, and diverse wildlife. Travelers can explore the charming coastal towns, indulge in local cuisine, and experience the rich history and traditions shared by both Gambia and Senegal in this captivating region.`,
  },

  {
    img: "./images/serekunda.jpg",
    country: "Serekunda - The Gambia",
    place: "Central Market",
    outline: `Serekunda is the largest and most populous urban center in Gambia, serving as a bustling commercial and residential hub. Located in the Kanifing Municipal Area, Serekunda offers a vibrant atmosphere with lively markets, shops, and restaurants, making it a dynamic and essential part of Gambian life. Visitors can immerse themselves in the local culture, witness traditional ceremonies, and enjoy the vibrant street life that characterizes this bustling city.`,
  },

  {
    img: "./images/soma.jpg",
    country: "Soma - The Gambia",
    place: "Soma City Central",
    outline: `Soma is a town located in the Lower River Region of Gambia, situated along the Trans-Gambia Highway. It serves as an essential transportation and trading hub, connecting the northern and southern parts of the country. With its strategic location and bustling market, Soma offers travelers and locals a diverse range of goods and services, making it a significant stop along the highway.`,
  },

  {
    img: "./images/Stone circle.jpg",
    country: "Wassu - The Gambia",
    place: "Stone Circle",
    outline: `The Stone Circles at Wassu in Gambia are a UNESCO World Heritage Site and an archaeological wonder. These ancient megalithic structures, dating back to the prehistoric era, hold historical and cultural significance, attracting visitors from around the world to witness their mysterious beauty.`,
  },
];
const textContainer = document.querySelector(".text-container");
const slidesContainer = document.querySelector(".slides-container");
const slidesContainerChildren = slidesContainer.children;
const ordinalNumbers = document.querySelector(".navigation .ordinal-number");
const nextBtn = document.querySelector(".navigation .next");
let currentIndex = 0;

textContainer.innerHTML = `
<div class="wrapper active">
          <span>
            <h4 class="country" style="--index: 0">${places[0].country}</h4>
          </span>
          <span>
            <h1 class="place" style="--index: 1">${places[0].place}</h1>
          </span>
          <span>
            <p class="describe" style="--index: 2">${places[0].outline}</p>
          </span>
          <span>
          <button class="discover-now" role="button" style="--index: 3"><span class="text">discover now</span></button>
          </span>
        </div>
`;

for (let i = 1; i < places.length; i += 1) {
  textContainer.innerHTML += `
<div class="wrapper">
          <span>
            <h4 class="country" style="--index: 0">${places[i].country}</h4>
          </span>
          <span>
            <h1 class="place" style="--index: 1">${places[i].place}</h1>
          </span>
          <span>
            <p class="describe" style="--index: 2">${places[i].outline}</p>
          </span>
          <span>
          <button class="discover-now" role="button" style="--index: 3"><span class="text">discover now</span></button>
          </span>
        </div>
        `;
}

slidesContainer.innerHTML = `
   <div class="slides background" style="--index: 0">
          <img src="${places[0].img}" alt="${places[0].place}" />
        </div>  
`;
translateXY(slidesContainerChildren[0]);

for (let i = 1; i < places.length; i += 1) {
  slidesContainer.innerHTML += `
   <div class="slides" style="--index: ${i - 1}">
          <img src="${places[i].img}" alt="${places[i].place}" />
        </div>
`;
}

ordinalNumbers.innerHTML = `
 <div class="hidden active">01</div>      
`;

for (let i = 1; i < places.length; i += 1) {
  ordinalNumbers.innerHTML += `
        <div class="hidden">0${i + 1}</div>
        `;
}
function translateXY(element) {
  let top = element.getBoundingClientRect().top;
  let left = element.getBoundingClientRect().left;
  return (element.style.transform = `translate(-${left}px, -${top}px)`);
}

function transitionEffect() {
  nextBtn.disabled = true;

  let cloned = slidesContainerChildren[0].cloneNode(true);
  cloned.classList.remove("background");
  cloned.style = `--index: 7`;
  slidesContainer.appendChild(cloned);

  slidesContainerChildren[1].classList.add("background");
  translateXY(slidesContainerChildren[1]);

  setTimeout(() => {
    slidesContainerChildren[0].remove();
    nextBtn.disabled = false;
  }, 1000);

  for (let i = 2; i < places.length; i += 1) {
    slidesContainerChildren[i].style = `--index: ${i - 2}`;
  }

  if (currentIndex < places.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  for (let i = 0; i < places.length; i += 1) {
    textContainer.children[i].classList.remove("active");
    ordinalNumbers.children[i].classList.remove("active");
  }
  textContainer.children[currentIndex].classList.add("active");
  ordinalNumbers.children[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", transitionEffect);
