const lastModified = new Date(document.lastModified)
document.getElementById('year').textContent = lastModified.getFullYear();
document.getElementById('last-modified').textContent = `Last Modification: ${lastModified.toLocaleString()}`;