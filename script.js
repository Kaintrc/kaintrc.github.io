const commissions = {
    emotes: {
        title: "Emotes",
        description: "Placeholder Description",
        price: "$3,5 to $6,5",
        images: ["Images/HypnoTaerie_squeesh.png", "Images/Pix_blep.png", "Images/Taerie_big_eyes_emote.png"]
    },
    doodles: {
        title: "Doodles",
        description: "Placeholder Description",
        price: "$5 - $15",
        images: ["Images/Doodle1.png", "Images/Doodle2.png", "Images/Doodle3.png"]
    },
    painting: {
        title: "Digital Painting ",
        description: "Placeholder Description",
        price: "$100 - $200",
        images: []
    }
};


let currentType = null;
let currentIndex = 0;


function showCommission(type) {
    currentType = type;
    currentIndex = 0;
    const content = document.getElementById('content');
    content.innerHTML = `
<button id=\"closeBtn\" onclick=\"closeOverlay()\">✕</button>
<h2>${commissions[type].title}</h2>
<p>${commissions[type].description}</p>
<p class=\"price\">${commissions[type].price}</p>
<div id=\"gallery\">
<button onclick=\"prevImage()\">⟨</button>
<img id=\"gallery-image\" src=\"${commissions[type].images[0] || ''}\" alt=\"Commission Example\">
<button onclick=\"nextImage()\">⟩</button>
</div>
`;
    document.getElementById('overlay').style.display = 'flex';
}


function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


function showImage() {
    if (currentType) {
        const img = document.getElementById('gallery-image');
        img.src = commissions[currentType].images[currentIndex];
    }
}


function prevImage() {
    if (currentType && commissions[currentType].images.length > 0) {
        currentIndex = (currentIndex - 1 + commissions[currentType].images.length) % commissions[currentType].images.length;
        showImage();
    }
}


function nextImage() {
    if (currentType && commissions[currentType].images.length > 0) {
        currentIndex = (currentIndex + 1) % commissions[currentType].images.length;
        showImage();
    }
}


for (let type in commissions) {
    commissions[type].images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}