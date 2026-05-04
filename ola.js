const layoutBtn = document.getElementById('layout-toggle');
const mainNav = document.getElementById('main-nav');
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
    };
}

if (layoutBtn) {
    layoutBtn.onclick = () => {
        mainNav.classList.toggle('vertical-nav');
        layoutBtn.textContent = mainNav.classList.contains('vertical-nav') ? 'Grid' : 'List';
    };
}

function navigateTo(pageId) {
    document.querySelectorAll('main section').forEach(page => {
        page.classList.add('hidden-page');
        page.classList.remove('active-page');
    });
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden-page');
        target.classList.add('active-page');
    }
}

function openDocProfile(name, img) {
    const profileName = document.getElementById('profile-doc-name');
    const profileImg = document.getElementById('profile-doc-img');
    if (profileName && profileImg) {
        profileName.innerText = name;
        profileImg.src = img;
        navigateTo('doc-profile-page');
    }
}

function handleBooking(time) {
    const nameElement = document.getElementById('profile-doc-name');
    if (nameElement) {
        const docName = nameElement.innerText;
        sessionStorage.setItem('selectedDocName', docName);
        sessionStorage.setItem('selectedSchedule', time);
        window.location.href = 'booking.html';
    }
}
