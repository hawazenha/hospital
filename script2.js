
/*window.onload = function() {
    let mode = localStorage.getItem("theme");

    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("btn").innerHTML = " Light Mode";
    }
};

let btn = document.getElementById("btn");

btn.onclick = function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark"); 
        btn.innerHTML = " Light Mode";
    } else {
        localStorage.setItem("theme", "light"); 
        btn.innerHTML = " Dark Mode";
    }
};*/

function searchDoctor() {
    let input = document.getElementById("doctorSearch").value.toLowerCase().trim();

    if (input === "") {
        alert("Please type something!");
        return;
    }

    let items = document.querySelectorAll(".item");
    for (let x of items) {
        if (x.textContent.toLowerCase().includes(input)) {
            x.scrollIntoView({ behavior: "smooth", block: "center" });
            return; 
        }
    }

    if (input.includes("pediatric") || input.includes("menna")) {
        window.location.href = "pe.html";
    } 
    else if (input.includes("dentist") || input.includes("dental")) {
        window.location.href = "de.html";
    }
    else if (input.includes("neuro")) {
        window.location.href = "ne.html";
    }
    else if (input.includes("internal")) {
        window.location.href = "IM.html";
    }
    else if (input.includes("eye") || input.includes("opthal")) {
        window.location.href = "op.html";
    }
    else {

        alert("Not found! Try searching for a specialty like 'Dentist'.");
    }
}