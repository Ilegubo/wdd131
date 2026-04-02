// 1. Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-mexico.webp"
    },
    {
        templeName: "Ghana Accra",
        location: "Accra- Flagstaff street",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage Alaska",
        dedicated: "1999, January, 09",
        area: 116642,
        imageUrl: "images/anchorage-temple.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Sofiivska Borshchahivka",
        dedicated: "2010, August 29",
        area: 22184,
        imageUrl: "images/kyiv-ukraine-temple.jpg"
    }
    
];

// 2. DOM Elements
const templeContainer = document.querySelector("#figure-images");
const filterTitle = document.querySelector("#filter-title");
const hamButton = document.querySelector('#menu-button');
const navBar = document.querySelector('#nav-bar');

// 3. Hamburger Menu Logic
hamButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    hamButton.classList.toggle('open');
});

// 4. Footer Dates
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
document.getElementById("copy-right-year").textContent = new Date().getFullYear();

// 5. Display Function
function createTempleCards(filteredTemples) {
    templeContainer.innerHTML = "";
    
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");
        
        const name = document.createElement("h3");
        name.textContent = temple.templeName;
        
        const info = document.createElement("figcaption");
        info.innerHTML = `
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area} sq ft</p>
        `;
        
        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy"); // Critical for performance
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(info);
        
        templeContainer.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", () => {
    filterTitle.textContent = "Home";
    createTempleCards(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    filterTitle.textContent = "Old";
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    createTempleCards(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    filterTitle.textContent = "New";
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    createTempleCards(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    filterTitle.textContent = "Large";
    const largeTemples = temples.filter(t => t.area > 90000);
    createTempleCards(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    filterTitle.textContent = "Small";
    const smallTemples = temples.filter(t => t.area < 10000);
    createTempleCards(smallTemples);
});

createTempleCards(temples);