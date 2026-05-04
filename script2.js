
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
        alert("Please type a specialty!");
        return;
    }

    
    let items = document.querySelectorAll(".item");

    for (let x of items) {
       
        let specialty = x.textContent.toLowerCase();

        if (specialty.includes(input)) {
           
            let targetPage = x.getAttribute("href");
            window.location.href = targetPage;
            return; 
        }
    }

 
    alert("Specialty not found! Try: Dentist, Pediatrics, etc.");
}