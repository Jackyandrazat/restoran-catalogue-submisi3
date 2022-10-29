/* eslint-disable no-useless-constructor */
class HeaderBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
                <h1>JAmpera</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                <li class="nav-item"><a href="#/">Home</a></li>
                <li><a href="#/like">Liked Restoran</a></li>
                <li class="nav-item"><a href="https://github.com/Jackyandrazat">About Us</a></li>
                </ul>
            </nav>
        </header>
          `;
  }
}
customElements.define('header-bar', HeaderBar);
