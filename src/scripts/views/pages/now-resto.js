import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const NowResto = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Restoran Yang Kami Rekomendasikan</h2>
      <div id="restorans" class="restorans">
      </div>
      </div>
      `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.listResto();
    const restosContainer = document.querySelector('#restorans');
    restos.forEach((restoran) => {
      restosContainer.innerHTML += createRestoItemTemplate(restoran);
    });
  },
};

export default NowResto;
