
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
    
    let input = document.getElementById("doctorSearch").value.toLowerCase();

    
    let items = document.querySelectorAll(".item");

    
    for (let x of items) {
        if (x.textContent.toLowerCase().includes(input)) {
            x.scrollIntoView({ behavior: "smooth", block: "center" });
            
            x.style.border = "2px solid blue";
            setTimeout(() => { x.style.border = "none"; }, 2000);
            
            return; 
        }
    }

    
    alert("Not found!");
}
