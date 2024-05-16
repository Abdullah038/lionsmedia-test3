class Navbar extends HTMLElement {
  constructor() {
    super();
    let n = this.attachShadow({ mode: "open" });
    n.innerHTML = `
      <style>
        header { width: 100%; }
        .navbar-cover{
  height: 78.97px;
        }
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; width: 100%; position: fixed; top: 0; z-index: 1000; transition: background-color 0.3s, box-shadow 0.3s; }
        @media (min-width: 2000px) {
          .navbar { justify-content: center; }
          .menu-contact { display: flex; justify-content: space-between; flex-grow: 1; max-width: 2000px; }
          .navbar-links { flex-grow: 1; display: flex; justify-content: center; }
        }
        .menu-contact { display: flex; flex-direction: row; justify-content: flex-end; gap: 20px; }
        .navbar-links { display: flex; align-items: center; background: rgb(255 255 255 / 16%); padding: 1px 0px; border: 1px solid #e15a5a87; border-radius: 5px; }
        .navbar-links a { display: flex; align-items: center; justify-content: center; margin: 3px 5px; text-decoration: none; color: #404040; }
        #contact-link a { padding: 7px 25px; }
        .navbar-links a span { padding: 8px 20px; border-radius: 5px; font-size: 1em; }
        .navbar-links a span.active, .navbar-links a span:hover { background: linear-gradient(to right, #e15a5a, #e0b66e); color: #ffffff; }
        .logo { margin-left: 30px; }
        #logo-link a { text-decoration: none; color: #404040; font-size: 1.5em; display: flex; flex-direction: row; align-items: center; gap: 10px; }
        .nav-links-all { display: flex; justify-content: center; }
        #contact-link { display: flex; align-items: center; border: 1px solid #e15a5a87; border-right: none; padding: 4px 0; border-radius: 5px 0px 0px 5px; background: rgb(255 255 255 / 16%); }
        #contact-link a { display: flex; text-decoration: none; color: #404040; }
        #contact-link:hover { background: linear-gradient(to right, #e15a5a, #e0b66e); border-radius: 5px 0px 0px 5px; }
        #contact-link:hover a { color: #ffffff; }
        .menu-icon { display: none; flex-direction: column; cursor: pointer; padding: 28px 20px; background: transparent; border: none; z-index: 10001; }
        .menu-icon span { height: 2px; background: #ffffff; margin-bottom: 5px; width: 25px; transition: all 0.3s ease; }
        @media (max-width: 768px) {
          .navbar { display: grid; grid-template-columns: 0.25fr 5fr 0.25fr; align-items: center; padding: 10px 0px 10px 0px; width: 100%; }
          .navbar-links a span.active, .navbar-links a span:hover { background: none; color: #404040; }
          #logo-link { grid-column: 1; justify-self: center; }
          .menu { grid-column: 3; justify-self: center; order: 2; }
          .menu-icon { display: flex; padding: 0; height: 40px; width: 40px; align-items: center; justify-content: center; }
          #contact-link { grid-column: 2; justify-self: end; border: 1px solid #e15a5a87; border-radius: 5px; }
          #contact-link:hover { border-radius: 5px; }
          #contact-link a span { font-size: 12px; border-radius: 5px; padding-right: 0px; }
          .navbar-links { position: fixed; top: 79px; right: -130%; width: 100%; height: calc(100% - 60px); background-color: #ecececf0; flex-direction: column; align-items: center; transition: right 0.3s ease-out; z-index: 1000; border-radius: 0; }
          .navbar-links.active { right: 0; }
          .navbar-links a { width: 75%; padding: 15px 10px; text-align: center; margin: 0; border-bottom: 1px solid rgba(43, 43, 43, 0.1); }
          .navbar-links a span { font-size: 16px; margin-top: 0; }
          .navbar-links a span:hover, .navbar-links a span.active { border: none; background-color: transparent; }
          .navbar-links a:hover { background-color: #b6b6b6; width: 100%; }
          #logo-text { display: none; }
        }
        .menu-icon span { background: #4e4e4e; }
        @media (min-width: 2000px) {
          #contact-link { border-right: 1px solid #e15a5a87; border-radius: 5px; }
        }
        .sticky-navbar { box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); background-color: #ffffffc9; }
      </style>
    <div class="navbar-cover">
        <nav class="navbar" id="navbar">
          <div id="logo-link">
            <a href="#home" class="logo">
              <picture>
                <source type="image/webp" srcset="images/logos/logo.webp" />
                <img src="images/logos/logo.png" width="50" height="52.58" alt="logo" />
              </picture>
              <span id="logo-text"> LIONSMEDIA </span>
            </a>
          </div>
          <div class="menu-contact">
            <div class="menu">
              <button class="menu-icon" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div class="nav-links-all">
                <div class="navbar-links" id="navbarLinks">
                  <a href="index.html"><span class="active">HOME</span></a>
                  <a href="services.html"><span>SERVICES</span></a>
                  <a href="portfolio.html"><span>PORTFOLIO</span></a>
                </div>
              </div>
            </div>
            <div id="contact-link">
              <a href="contact.html">CONTACT US</a>
            </div>
          </div>
        </nav>
        </div>
    `;
  }
  connectedCallback() {
    let n = this.shadowRoot.querySelector(".menu-icon"),
      a = this.shadowRoot.querySelector("#navbarLinks"),
      e = this.shadowRoot.querySelectorAll(".navbar-links a"),
      i = this.shadowRoot.querySelector("#navbar");
    n.addEventListener("click", function () {
      a.classList.toggle("active"), document.body.classList.toggle("menu-open");
      document.body.classList.contains("menu-open")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    }),
      e.forEach((n) => {
        n.addEventListener("click", function () {
          a.classList.remove("active"),
            document.body.classList.remove("menu-open");
          document.body.style.overflow = "";
        });
      });
    let t;
    window.addEventListener(
      "resize",
      function () {
        t ||
          (t = setTimeout(function () {
            (t = null),
              window.innerWidth > 768 &&
                (a.classList.remove("active"),
                document.body.classList.remove("menu-open"));
            document.body.style.overflow = "";
          }, 100));
      },
      { passive: !0 }
    ),
      window.addEventListener("scroll", function () {
        window.scrollY > 0
          ? i.classList.add("sticky-navbar")
          : i.classList.remove("sticky-navbar");
      });
  }
}
customElements.define("custom-navbar", Navbar);
