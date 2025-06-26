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
    // Card Slider Variable
    this.cardWrapper = document.querySelector(".card-wrapper");
    this.isDragging = false;
    this.startX = undefined;
    this.init();
  }

  init() {
    // Hamburger Function
    this.hamburgerClickEvent();
    // Card Slider Function
    this.cardSlider();
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

  cardSlider() {
    if (this._dragStartHandler) {
      this.cardWrapper.removeEventListener("touchstart", this._dragStartHandler);
      this.cardWrapper.removeEventListener("touchmove", this._draggingHandler);
      this.cardWrapper.removeEventListener("touchend", this._dragStopHandler);
      this.cardWrapper.removeEventListener("mousedown", this._dragStartHandler);
      this.cardWrapper.removeEventListener("mousemove", this._draggingHandler);
      this.cardWrapper.removeEventListener("mouseup", this._dragStopHandler);
      this.cardWrapper.removeEventListener("mouseleave", this._dragStopHandler);
    }

    this._dragStartHandler = (e) => {
      this.isDragging = true;
      this.cardWrapper.classList.add("dragging");
      this.startX = e.pageX || e.touches[0].pageX;
      this.startScrollLeft = this.cardWrapper.scrollLeft;
    };

    this._draggingHandler = (e) => {
      if (!this.isDragging) return;
      const currentX = e.pageX || e.touches[0].pageX;
      const walk = currentX - this.startX;
      this.cardWrapper.scrollLeft = this.startScrollLeft - walk;
    };

    this._dragStopHandler = () => {
      this.isDragging = false;
      this.cardWrapper.classList.remove("dragging");
    };

    this.cardWrapper.addEventListener("touchstart", this._dragStartHandler);
    this.cardWrapper.addEventListener("touchmove", this._draggingHandler);
    this.cardWrapper.addEventListener("touchend", this._dragStopHandler);
    this.cardWrapper.addEventListener("mousedown", this._dragStartHandler);
    this.cardWrapper.addEventListener("mousemove", this._draggingHandler);
    this.cardWrapper.addEventListener("mouseup", this._dragStopHandler);
    this.cardWrapper.addEventListener("mouseleave", this._dragStopHandler);
  }
}

new FrontEndScripts();
