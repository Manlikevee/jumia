
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





 