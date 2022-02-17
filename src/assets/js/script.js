
function scripts(){

  /*----------------------------
   Ocultar menu hamburguesa
  -----------------------------*/
    let navLinks = document.querySelectorAll('.nav-item')
    let menuToggle = document.getElementById('navbarTogglerMenu')

    navLinks.forEach((el) => {
        el.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
    });


}

