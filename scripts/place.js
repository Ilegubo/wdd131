const lastModified = new Date(document.lastModified)
document.querySelector('#year').textContent = lastModified.getFullYear();
document.querySelector('#last-modified') = `Last Modification: ${lastModified.toLocaleString}`;