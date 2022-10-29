/* eslint-disable no-multiple-empty-lines */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const createRestoDetailTemplate = (restoran) => `
  <h2 class="restoran__title">${restoran.name}</h2>
  <img class="restoran__poster" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" />
  <div class="restoran__info" >
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restoran.city}</p>
    <h4>Alamat</h4>
    <p>${restoran.address}</p>
    <h4>Rating</h4>
    <p>${restoran.rating}</p>
  </div>
  <div class="restoran__overview">
    <h3>Overview</h3>
    <p>${restoran.description}</p>
  </div>
  <div class="makanan__overview">
    <h4>Menu Minuman</h4>
    <p>${restoran.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
    <br/>
    <h4>Menu Makanan</h4>
    <p>${restoran.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
  </div>
  <div class="customer__review">
    <p> ${restoran.customerReviews.reduce((show, value) => show.concat(`<br>
    <p>${value.name}</p>
    <p>${value.review}</p>
    <p>${value.date}</p>
    `), '<h4>Customer Reviews:</h4>')}</p>
  </div>
`;

const createRestoItemTemplate = (restoran) => `
  <div class="restoran-item">
    <div class="restoran-item__header">
      <img class="lazyload restoran-item__header__poster" alt="${restoran.name}"
           src="${restoran.pictureId ? CONFIG.BASE_IMAGE_URL + restoran.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restoran-item__header__rating">
        <p>⭐️<span class="restoran-item__header__rating__score">${restoran.rating}</span></p>
      </div>
    </div>
    <div class="restoran-item__content">
      <h3><a href="/#/detail/${restoran.id}">${restoran.name}</a></h3>
      <p>${restoran.description}</p>
    </div>
  </div>
`;

const createLikeRestoranButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoranButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoranButtonTemplate,
  createUnlikeRestoranButtonTemplate,
};
