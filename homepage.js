var aboutus = document.getElementById("aboutus");

var member = document.getElementById("member");

var rank = document.getElementById("rank");

var sports = document.getElementById("sports");

var home = document.getElementById("home");

var whatsapp = document.getElementById("whatsapp");

var tasks = document.getElementById("tasks")

aboutus.onclick = () => {
    location.href = "./aboutus.html";
}

member.onclick = () => {
    location = "https://eri2191j0l6.typeform.com/to/sNUxnwBO";
}

rank.onclick = () => {
    location.href = "./rank.html";
}

sports.onclick = () => {
    location.href = "./sports.html";
}

home.onclick = () => {
    location.href = "./index.html";
}

whatsapp.onclick = () => {
    location = "https://chat.whatsapp.com/Etf4BnuazkN1YkrE3dvhvb";
}

function submita() {
    if (document.getElementById("tasks").checked) {
        divans.innerHTML = "Good Work teammate. Task completed. Now msg the main captain about your work with all the details and see your rank rising."
    } else {
        divans.innerHTML = "Complete all the tasks given"
    }
}