window.onload = function() {
  document.getElementById('doctorname').value = sessionStorage.getItem('selectedDocName') || "Not Selected";
  document.getElementById('appointment').value = sessionStorage.getItem('selectedSchedule') || "Not Scheduled";

 /*const themebutton = document.getElementById('themebutton');
 if(localStorage.getItem('theme') === 'dark') {
     document.body.classList.add('dark-theme');
    themeBtn.innerText = "Light Mode";
     }
     themebutton.onclick = () => {
     document.body.classList.toggle('darktheme');
     const isdark = document.body.classList.contains('darktheme');
     localStorage.setItem('theme', isdark ? 'dark' : 'light');
     themebutton.innerText = isdark ? "Light Mode" : "Dark Mode";
      };*/
    const layoutbutton = document.getElementById('layoutbutton');
    const content = document.getElementById('content');
    layoutbutton.onclick = () => content.classList.toggle('rowlayout');
    const form = document.getElementById('Form');
    form.onsubmit = function(e) {
      e.preventDefault();
      let name = document.getElementById('username').value.trim();
      let schedule = document.getElementById('appointment').value;
      let error = document.getElementById('nameError');

    if (name.split(' ').filter(w => w !== "").length < 3) {
      error.textContent = "Please enter your triple name";
      error.style.color = "red";
        } 
 else {
   error.textContent = "";
   localStorage.setItem('patient', name);
   localStorage.setItem('time', schedule);
    alert("Booking Saved for: " + schedule);
 window.location.href = 'about us.html';
        }
    };
};