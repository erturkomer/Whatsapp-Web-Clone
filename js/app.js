const iconButton = document.querySelectorAll('.btn');
const filterIcon = document.querySelector('.filter-icon');
const searchIcon = document.getElementById('search-icon');
const searchBox = document.querySelector('.search-box');
const plusClose = document.querySelector('.plus');
const send = document.querySelector('.send');
const write = document.querySelector('.write');

iconButton.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('icon-button-focus');
    });
});

filterIcon.addEventListener('click', () => {
    filterIcon.classList.toggle('filter-green');
});

searchIcon.addEventListener('click', () => {
    if (searchIcon.textContent === 'arrow_back') {
        searchIcon.textContent = 'search';
        searchIcon.style.color = "#697f8c";
        searchIcon.style.fontSize = "20px";
        searchBox.value = "";
    }
    else {
        searchIcon.textContent = 'arrow_back';
        searchIcon.style.color = "#008a4a";
        searchIcon.style.fontSize = "22px";
    }
});

let focus = false;
function toggleFocus() {
    if (focus) {
        searchBox.blur();
    } else {
        searchBox.focus();
    }

    focus = !focus;
}

searchBox.addEventListener('input', function () {
    const value = searchBox.value;
    if (value.length > 0) {
        searchIcon.textContent = 'arrow_back';
        searchIcon.style.color = "#008a4a";
        searchIcon.style.fontSize = "22px";
    }
});


write.addEventListener('input', function () {
    const value = write.value;
    if (value.length > 0) {
        send.textContent = 'send';
        send.style.color = '#008a4a';
    }
    else{
        send.textContent = 'mic';
        send.style.color = '#003646';
    }
});

plusClose.addEventListener('click', () => {
    if (plusClose.textContent === 'close') {
        plusClose.textContent = 'add';
    }
    else {
        plusClose.textContent = 'close';
    }
});
