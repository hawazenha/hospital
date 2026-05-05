function showDoctorAbout(name, description) {
    document.getElementById("aboutName").innerText = name;
    document.getElementById("aboutText").innerText = description;
    document.getElementById("aboutModal").style.display = "block";
}

function closeAbout() {
    document.getElementById("aboutModal").style.display = "none";
}

// لإغلاق النافذة عند الضغط خارج المربع
window.onclick = function(event) {
    var modal = document.getElementById("aboutModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function sendData(doctor, time) {
    sessionStorage.setItem('selectedDocName', doctor);
    sessionStorage.setItem('selectedSchedule', time);
    window.location.href = 'booking.html'; // ده اسم صفحتك
}

let layout= document.getElementById("Layout");
    layout.addEventListener("click",function(){
        document.body.classList.toggle("alt-layout")
    });






