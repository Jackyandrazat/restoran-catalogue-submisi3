/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
class FooterBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Oktober &copy; 2022 Modul FE Expert</p>
        </footer>
      `;
  }
}
customElements.define('footer-bar', FooterBar);
