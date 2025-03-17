class MobileNavbar {
    constructor(mobileMenu, navList) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll();
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation ="")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s ${
                index / 7 + 0.3
            }s`);
        });
    }

    handleClick() {
        this.navList.classList.toogle(this.handleClick);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    nit() {
        if (this.mobileMenu) {
          this.addClickEvent();  
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar (
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
MobileNavbar.init()
