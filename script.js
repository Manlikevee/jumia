const navbar = document.getElementById('navbar');
let isNavbarFixed = false;

function handleScroll() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 200 && !isNavbarFixed) {
    navbar.classList.add('navbar-fixed');
    setTimeout(() => {
      navbar.classList.add('show');
    }, 10);
    isNavbarFixed = true;
  } else if (scrollPosition <= 170 && isNavbarFixed) {
    navbar.classList.remove('show');
    setTimeout(() => {
      navbar.classList.remove('navbar-fixed');
    }, 300);
    isNavbarFixed = false;
  }
}

window.addEventListener('scroll', handleScroll);

    const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      overlay = document.querySelector(".overlay");
      const nav = document.querySelector('.open');
      const body = document.body;

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
        body.style.overflow = 'hidden';
        body.style.width = '100%';
        console.log('working')
        
      });
    });

    overlay.addEventListener("click", () => {
      navBar.classList.remove("open");
        body.style.overflow = 'scroll';
    body.style.width = '';
    });





 