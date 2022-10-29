/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/header-bar';
import './component/hero-bar';
import './component/main-bar';
import './component/footer-bar';
import App from './views/app';
import restaurants from '../DATA.json';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

/* console.log(restaurants);
document.addEventListener('DOMContentLoaded', () => {
    const getItem = (data) => {
        let results = "";
        data.restaurants.forEach((ampera) => {
            results += `<article id="menu-id" class="artikel artikel-one">
            <figure>
              <img class="image-one" src="${ampera.pictureId}" alt="${ampera.alt}">
              <figcaption>
                <p>${ampera.city}</p>
              </figcaption>
            </figure>
            <div class="content-div">
                <h1 class="title">${ampera.name}</h1>
                <p class="description">${ampera.description}</p>
            </div>
            <div class="rating">
              <p>Rating : ${ampera.rating}</p>
            </div>
          </article>`;
          document.getElementById("posts").innerHTML = results;
        });
    }
    getItem(restaurants);

});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#navbar');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
}); */
