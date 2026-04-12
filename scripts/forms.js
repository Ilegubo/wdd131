const year = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `last modified: ${year.toLocaleString()}`;
const currentYear = new  Date().getFullYear();
document.getElementById("copy-right-year").textContent = currentYear;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    document.querySelector("#pname").appendChild(option);
});


function getReviewCount() {
    const count = localStorage.getItem('reviewCount');
    return count ? parseInt(count, 10) : 0;
}

function incrementReviewCount() {
    const currentCount = getReviewCount();
    const newCount = currentCount + 1;
    localStorage.setItem('reviewCount', newCount.toString());
    return newCount;
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reviewText = document.getElementById('reviewTextarea').value.trim();
    
    if (reviewText !== '') {

        const totalReviews = incrementReviewCount();
        console.log(`Total reviews given: ${totalReviews}`);
    }
});