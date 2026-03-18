const year = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `last modified: ${year.toLocaleString()}`;
const currentYear = new  Date().getFullYear();
document.getElementById("copy-right-year").textContent = currentYear;