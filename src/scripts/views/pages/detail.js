/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="restoran" class="restoran"></div>
      <div id="likeButtonContainer"></div>
      <div class="review-content">
        <form id="form-review">
          <h3 class="customer-title">Review</h3>
          <div class="form-group">
            <input type="text" id="nama" placeholder="Masukan Nama Anda" name="nama">
          </div>
          <div class="form-group">
            <input type="text" id="review" placeholder="Masukan Review Anda" name="review">
          </div>
          <button id="submit" class="btn-submit">Kirim Review</button>
        </form>
      </div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restoran');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestorans: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });

    const inputName = document.querySelector('#nama');
    const inputReview = document.querySelector('#review');
    const buttonSubmit = document.querySelector('#submit');

    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        const review = {
          id: resto.id,
          name: inputName.value,
          review: inputReview.value,
        };
        const rawResponse = await TheRestoDbSource.postRestaurant(review);
        const { error, message, customerReviews } = await rawResponse.json();
        if (!error) {
          inputName.value = '';
          inputReview.value = '';
          const customerReviewContainer = document.querySelector('.customer__review');
          customerReviewContainer.innerHTML = `<p>${customerReviews.reduce(
            (show, value) => show.concat(`<br>
          <p>${value.name}</p>
          <p>${value.review}</p>
          <p>${value.date}</p>
          `),
            '<h4>Customer Reviews:</h4>',
          )}</p>`;
          alert('Review Berhasil di kirim');
        } else throw message;
      } catch (error) {
        alert(`Review gagal dikirim. Error: ${error}`);
      }
    });
  },
};

export default Detail;
