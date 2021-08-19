var about = document.getElementById("about");

var parts = document.getElementById("parts");

var home = document.getElementById("home");

about.onclick = () => {
    location.href = "aboutus.html";
}

parts.onclick = () => {
    location.href = "list.html";
}

home.onclick = () => {
    location.href = "./index.html";
}