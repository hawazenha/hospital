const layoutBtn = document.getElementById('layout-toggle');
const mainNav = document.getElementById('main-nav');




if(layoutBtn) {
layoutBtn.onclick=()=>{
mainNav.classList.toggle('vertical-nav');
layoutBtn.textContent = mainNav.classList.contains('vertical-nav') ? 'Grid' : 'List';
};
}
function navigateTo(pageId){
document.querySelectorAll('main section').forEach(page => {
page.classList.add('hidden-page');
page.classList.remove('active-page');
});
document.getElementById(pageId).classList.remove('hidden-page');
document.getElementById(pageId).classList.add('active-page');
}
function openDocProfile(name, img) {
const profileName = document.getElementById('profile-doc-name');
const profileImg = document.getElementById('profile-doc-img'); 
if(profileName && profileImg){
profileName.innerText = name;
profileImg.src = img;
navigateTo('doc-profile-page');
}
}
function handleBooking(time){
const docName = document.getElementById('profile-doc-name').innerText;
sendData(docName, time);
}
function sendData(doc, time){
sessionStorage.setItem('selectedDocName', doc);
sessionStorage.setItem('selectedSchedule', time);
window.location.href = 'booking.html'; 
};