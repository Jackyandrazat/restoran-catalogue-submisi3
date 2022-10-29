/* class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurans }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurans = favoriteRestaurans;
  }
  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  
  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    let foundMovies;
    if (this.latestQuery.length > 0) {
      foundMovies = await this._favoriteRestaurans.searchRestaurants(this.latestQuery);
    } else {
      foundMovies = await this._favoriteRestaurans.getAllResto();
    }

    this._showFoundRestaurants(foundMovies);
  
  }

  _showFoundRestaurants(restorans) {
    const html = restorans.reduce(
      (carry, restoran) => carry.concat(`<li class="restoran"><span class="restoran__title">${restoran.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.restorans').innerHTML = html;

    document.getElementById('restoran-search-container')
      .dispatchEvent(new Event('restorans:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}
export default FavoriteRestaurantSearchPresenter; */