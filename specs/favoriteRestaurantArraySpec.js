import { itActsAsFavoriteRestoranModel } from './contract/favoriteRestaurantContract';

let favoriteRestorans = [];

const FavoriteRestoranArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestorans.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteRestorans;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestorans.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestorans = favoriteRestorans.filter((resto) => resto.id !== id);
  },
};

describe('Favorite restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestorans = []);

  itActsAsFavoriteRestoranModel(FavoriteRestoranArray);
});