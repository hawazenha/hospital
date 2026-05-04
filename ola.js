const layoutBtn = document.getElementById('layout-toggle');
const mainNav = document.getElementById('main-nav');
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    };
}

if (layoutBtn) {
    layoutBtn.onclick = () => {
        mainNav.classList.toggle('vertical-nav');
        layoutBtn.textContent = mainNav.classList.contains('vertical-nav') ? 'Grid' : 'List';
    };
}

function navigateTo(pageId) {
    document.querySelectorAll('main section').forEach(p => p.classList.replace('active-page', 'hidden-page'));
    document.getElementById(pageId).classList.replace('hidden-page', 'active-page');
}

function openDocProfile(name, img) {
    document.getElementById('profile-doc-name').innerText = name;
    document.getElementById('profile-doc-img').src = img;
    navigateTo('doc-profile-page');
}

function handleBooking(time) {
    const doc = document.getElementById('profile-doc-name').innerText;
    sessionStorage.setItem('selectedDocName', doc);
    sessionStorage.setItem('selectedSchedule', time);
    window.location.href = 'booking.html';
}
