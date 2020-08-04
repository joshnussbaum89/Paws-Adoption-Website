/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const search = document.querySelector('#search');

// Hide location icon when focused
search.addEventListener('focusin', () => {
    document.querySelector('.locationmarker').classList.toggle('hide-content');
});

// Show location icon when not in focus
search.addEventListener('focusout', function () {
    document.querySelector('.locationmarker').classList.toggle('hide-content');
});