/* ------ After Link Click Toogle Button Expland Close ------ */
function closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    bsCollapse.hide();
}

