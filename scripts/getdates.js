const year = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `last modified: ${year.toLocaleString()}`;