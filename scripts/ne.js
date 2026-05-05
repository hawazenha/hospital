function showDoctor(page) {
  let frame = document.getElementById("frame");

  frame.classList.remove("show");

  setTimeout(() => {
    frame.src = page;
    frame.classList.add("show"); 
  }, 200);
}
window.onload = function() {
  showDoctor('yep/welcome.html');
}

function showWelcome() {
  document.getElementById("frame").src = "yep/welcome.html";
}

function sendData(doctor, time) {
    sessionStorage.setItem('selectedDocName', doctor);
    sessionStorage.setItem('selectedSchedule', time);
    window.location.href = 'booking.html';
}
let layout= document.getElementById("layout");
    layout.addEventListener("click",function(){
        document.body.classList.toggle("alt-layout")
    });