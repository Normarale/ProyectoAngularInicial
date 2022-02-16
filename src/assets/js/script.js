
function main(){
  // Agregar clase para no ocultar menu navegacion
const menunav = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        menunav.classList.add('navbarDark')
    }
    else {
        menunav.classList.remove('navbarDark');
    }
};
  // collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

    /*---------------------------
      Selector
    ------------------------------ */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    };


    /*------------------------
     Animacion para los Skills
    ------------------------------*/


  }
