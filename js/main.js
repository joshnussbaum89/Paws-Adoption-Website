/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const search = document.querySelector('#search');
const send = document.querySelector('.contact-form button');

// Hide location icon when focused
search.addEventListener('focusin', () => {
    document.querySelector('.locationmarker').classList.toggle('hide-content');
});

// Show location icon when not in focus
search.addEventListener('focusout', function () {
    document.querySelector('.locationmarker').classList.toggle('hide-content');
});

// Alert user to confirm send
send.addEventListener('click', () => {
    alert('Are you sure you want to send?');
});