// -----------------------
// Front End Scripts Stuff
// -----------------------
class FrontEndScripts {
  constructor() {
    // Hamburger Variable
    this.navbarHamburger = document.querySelector(".navbar-hamburger");
    this.navbarHamburgerLine = document.querySelectorAll(".navbar-hamburger-line");
    this.navbarMenu = document.querySelector(".navbar-menu-wrapper");
    this.navbarMenuList = document.querySelectorAll(".navbar-menu-list");

    this.init();
  }

  init() {
    // Hamburger Function
    this.hamburgerClickEvent();
  }

  // Hambuger Event Click Listener
  hamburgerClickEvent() {
    this.navbarHamburger.addEventListener("click", () => {
      this.navbarHamburgerLine.forEach((element) => {
        element.classList.toggle("active");
        this.navbarMenu.classList.toggle("translate-x-[81dvw]");
      });
    });

    this.navbarMenuList.forEach((element) => {
      element.addEventListener("click", () => {
        this.navbarMenu.classList.remove("translate-x-[81dvw]");
        this.navbarHamburgerLine.forEach((element) => {
          element.classList.remove("active");
        });
      });
    });
  }
}

// Start Whole Script When DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  new FrontEndScripts();
});
