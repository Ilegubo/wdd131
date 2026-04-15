const button = document.querySelector("#menu");
const navMenu = document.querySelector("#navmenu");

button.addEventListener("click", () => {
    button.classList.toggle("open")
    navMenu.classList.toggle("open")
})

// For the missions page
// object for missions card
const missions = [
    {
        name : "Ghana Accra East Mission",
        president : "Ben Beeson",
        wife : "Julynn Beeson",
        imageUrl: "images/ae-president.webp",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra North Mission",
        president : "Daren ALovell",
        wife : "Cami Lovell",
        imageUrl: "images/an-mission.webp",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra West Mission",
        president : "K. Erik Jacobsen",
        wife : "Renee M. Jacobsen",
        imageUrl: "images/aw-mission.webp",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra Cape Coast Mission",
        president : "Kojo Tachie-Menson",
        wife : "Ann Tachie-Menson",
        imageUrl: "images/cc-mission.webp",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Takoradi Mission",
        president : "Jacob Helland",
        wife : "Janet Beck Helland",
        imageUrl: "images/tk-mission.webp",
        geoLocation: "Takororadi",
        closestTemple: "Ghana Kumasi Temple"
    },
    {
        name : "Ghana Kumasi Mission",
        president : "Alex Boateng",
        wife : "Anita Boateng",
        imageUrl: "images/km-mission.webp",
        geoLocation: "Kumasi",
        closestTemple: "Ghana Kumasi Temple"
    }    
]

// for the temples page
// object for temples card
const temples = [
    {
        name: "Ghana Accra",
        president: "Anthony Mua Kaku",
        wife: "Doe Akua Afriyie Awudetsey Kaku",
        geoLocation: "Cantonments",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana.webp"
    },
    {
        name: "Ghana Kumasi",
        president: null,
        wife: null,
        geoLocation: "Y11 Suntreso Road, Bantama Kumasi",
        dedicated: "Still Under Construction",
        area: null,
        imageUrl: "images/ghana-flag.webp"
    },
    {
        name: "Ghana Cape Coast",
        president: null,
        wife: null,
        geoLocation: "Cape Coast",
        dedicated: "Still Under Construction",
        area: null,
        imageUrl: "images/ghana-flag.webp"
    }    
]

const mtc = [
    {
        name : "Ghana Missionary Training Centre",
        president: "J. Benoit Duquette",
        wife: "Diane Duquette",
        geoLocation: "Accra Cantonments",
        created: "2002/2017",
        area : null,
        imageUrl: "images/mtc.webp"
    },
    {
        name : "Ghana Missionary Training Centre",
        president: "J. Benoit Duquette",
        wife: "Diane Duquette",
        geoLocation: "Accra Cantonments",
        created: "2002/2017",
        area : null,
        imageUrl: "images/mtc-hall.webp"
    },
    {
        name : "Ghana Missionary Training Centre",
        president: "J. Benoit Duquette",
        wife: "Diane Duquette",
        geoLocation: "Accra Cantonments",
        created: "2002/2017",
        area : null,
        imageUrl: "images/mtc1.webp"
    },
]

// function to create temples/missions/mtc cards

function createCards(dataItem, dataContainer){
    if (!dataContainer) return;
    const container = document.querySelector(dataContainer);
    if (!container) return;
    container.innerHTML = "";

    dataItem.forEach(item => {
        const card = document.createElement("figure");
        const image = document.createElement("img");
        const info = document.createElement("figcaption");

        image.setAttribute("src", item.imageUrl);
        image.setAttribute("alt", item.name);
        image.setAttribute("loading", "lazy");

        if (dataItem === temples) {
            info.innerHTML = `<div class="caption"><p><span class="label">Name</span>: ${item.name}
            <p><span class="label">President</span>: ${item.president}
            <p><span class="label">Wife</span>: ${item.wife}
            <p><span class="label">Location</span>: ${item.geoLocation}
            <p><span class="label">Area</span>: ${item.area}</div>`
        } else if(dataItem == missions) {
            info.innerHTML = `<div class="caption"><p><span class="label">Name</span>: ${item.name}
            <p><span class="label">President</span>: ${item.president}
            <p><span class="label">Wife</span>: ${item.wife}
            <p><span class="label">Geo-Location</span>: ${item.geoLocation}
            </div>`
        }
        else if(dataItem == mtc){
            info.innerHTML = `<div class="caption"><p><span class="label">Name</span>: ${item.name}
            <p><span class="label">President</span>: ${item.president}
            <p><span class="label">Wife</span>: ${item.wife}
            <p><span class="label">Geo-Location</span>: ${item.geoLocation}
            </div>`
        }


        card.appendChild(image);
        card.appendChild(info);

        container.appendChild(card);
    })
}

const pageTitle = document.querySelector("#page-title");
if (pageTitle) {
    if (pageTitle.textContent.trim() === "Missions") {
        createCards(missions, "#missions-container");
    } else if (pageTitle.textContent.trim() === "Temples") {
        createCards(temples, ".dynamic-temples");
    }
    else if (pageTitle.textContent.trim() === "MTC"){
        createCards(mtc, "#mtc-container")
    }
}


const getDate = new Date(document.lastModified);
document.querySelector("#year").textContent = getDate.getFullYear();
document.querySelector("#last-modified").textContent = getDate;

