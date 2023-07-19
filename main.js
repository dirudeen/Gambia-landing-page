const data = [
    {
        img: "./images/senegambia.jpg",
        country: 'Senegambia - The Gambia',
        place: "Senegambia",
        discribe:
        `orem ipsum dolor sit amet consectetur, adipisicing elit. 
        Rerum illo, commodi quibusdam non maxime itaque perferendis
        porro ad doloremque maiores dolorem quidem culpa dolores.
        At optio deleniti hic ex ducimus.`

    },
    
    {
        img: "./images/soma.jpg",
        country: 'Soma - The Gambia',
        place: "Soma",
        discribe:
        `orem ipsum dolor sit amet consectetur, adipisicing elit. 
        Rerum illo, commodi quibusdam non maxime itaque perferendis
        porro ad doloremque maiores dolorem quidem culpa dolores.
        At optio deleniti hic ex ducimus.`

    },
    
    {
        img: "./images/serekunda.jpg",
        country: 'Serekunda - The Gambia',
        place: "Serekunda",
        discribe:
        `orem ipsum dolor sit amet consectetur, adipisicing elit. 
        Rerum illo, commodi quibusdam non maxime itaque perferendis
        porro ad doloremque maiores dolorem quidem culpa dolores.
        At optio deleniti hic ex ducimus.`
        
    },

    {
        img: "./images/banjul.jpg",
        country: 'Banjul - The Gambia',
        place: "Banjul",
        discribe:
        `orem ipsum dolor sit amet consectetur, adipisicing elit. 
        Rerum illo, commodi quibusdam non maxime itaque perferendis
        porro ad doloremque maiores dolorem quidem culpa dolores.
        At optio deleniti hic ex ducimus.`
        
    },
    
]


const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector('.ordinal-number');

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";

for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
    <div class="wrapper">
    <span>
      <h5 class="country" style="--idx: 0">${data[i].country}</h5>
    </span>
    <span>
      <h1 class="place" style="--idx: 1">${data[i].place}</h1>
    </span>
    <span>
      <p class="describe" style="--idx: 2">${data[i].discribe}</p>
    </span>
    <span>
      <button class="discover-button" style="--idx: 3">Discover Now</button>
    </span>
  </div>
  `

  ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`
}

introduce.children[0].classList.add("active")
ordinalNumber.children[0].classList.add("active")



const thumbnailListWraapper = document.querySelector(`.thumbnail-list .wrapper`);

thumbnailListWraapper.innerHTML += `
 <div class="thumbnail zoom">
    <img src="${data[0].img}" alt="">
 </div>`;

for (let i = 1; i < data.length; i += 1) {
    thumbnailListWraapper.innerHTML += `
 <div class="thumbnail zoom" style="--idx: ${i - 1}">
    <img src="${data[i].img}" alt="">
 </div>`;
    
}