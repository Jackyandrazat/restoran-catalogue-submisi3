/* eslint-disable no-useless-constructor */
class HeroBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Tempat Cari Makan Terenak Terbaik</h1>
                <p class="hero-tagline">Ingat dengan Quote Seseorang Bajak Laut "Jika Anda Lapar, Makanlah" ~ Mongkey D Luffy ~</p>
                <picture>
                  <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
                  <img src='./images/hero-image_4-large.jpg' 
                      alt="hero poster">
                </picture>
            </div>
        </div>
          `;
  }
}
customElements.define('hero-bar', HeroBar);
