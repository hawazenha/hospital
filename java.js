function showDoctors() {
    document.getElementById('Department').classList.remove('active');
     document.getElementById('doctors').classList.add('active');
}
function selectDoctor(doctorName) {
       document.getElementById('doctors').classList.remove('active');
     document.getElementById('details').classList.add('active');
    document.querySelector('#details h4').innerText = "Booking for " + doctorName;
}/*
     let icon = document.getElementById('dark');
    let body = document.getElementById('body');
     icon.onclick = function (){
      body.classList.toggle('dark');
    }
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
    icon.onclick = function () {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
             localStorage.setItem('theme', 'dark');
        } else {
           localStorage.setItem('theme', 'light');
        }
    }*/
    let layout= document.getElementById("layout");
    layout.addEventListener("click",function(){
        document.body.classList.toggle("alt-layout")
    });


    function sendData(doctor, time) {
     sessionStorage.setItem('selectedDocName', doctor);
      sessionStorage.setItem('selectedSchedule', time);
    window.location.href = 'booking.html';
}
