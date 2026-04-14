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
        imageURL: "",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra North Mission",
        president : "Daren ALovell",
        wife : "Cami Lovell",
        imageURL: "",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra West Mission",
        president : "K. Erik Jacobsen",
        wife : "Renee M. Jacobsen",
        imageURL: "",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Accra Cape Coast Mission",
        president : "Kojo Tachie-Menson",
        wife : "Ann Tachie-Menson",
        imageURL: "",
        geoLocation: "Accra",
        closestTemple: "Ghana Accra Temple"
    },
    {
        name : "Ghana Takoradi Mission",
        president : "Jacob Helland",
        wife : "Janet Beck Helland",
        imageURL: "",
        geoLocation: "Takororadi",
        closestTemple: "Ghana Kumasi Temple"
    },
    {
        name : "Ghana Kumasi Mission",
        president : "Alex Boateng",
        wife : "Anita Boateng",
        imageURL: "",
        geoLocation: "Kumasi",
        closestTemple: "Ghana Kumasi Temple"
    }    
]

// for the temples page
// object for temples card
const temples = [
    {
        templeName: "Ghana Accra",
        location: "Cantonments",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Ghana Kumasi",
        location: "Y11 Suntreso Road, Bantama Kumasi",
        dedicated: "Still Under Construction",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Ghana Cape Coast",
        location: "Cape Coast",
        dedicated: "Still Under Construction",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    }    
]

// function to create temples card
function createTempleCards(temples){
    imgContainer = document.querySelector(".dynamic-temples")
    card = document.createElement("figure");
    img = document.createElement("img");

    temples.foreach(temple => {
        // name of mission
        const name = document.createElement("h4");
        card.appendChild(name);

        name.textContent = temple.name;
        img.setAttribute("src", temple.imageURL);
        img.setAttribute("alt", temple.name);
        img.setAttribute("loading", "lazy");
        card.appendChild(img);
        
        // info: name, date completed, current president, geolocation
        const info = document.createElement("figcaption")
        info.innerHTML(`<p><b>${temple.name}</b>
            <p><span class="label">Location</span>
            <p><span class="label">President</span>:${temple.president}
            <p><span class="label">GeoLocation</span>:${temple.location}`)
            // append the info to the card
            card.appendChild(info);

            // more importantly append the card  to the parent container which is of class dynamic-temples
            imgContainer.appendChild(card);
        })
        
        document.querySelector("#temples").addEventListener("click", () => {
            createTempleCards(temples);
        })
}