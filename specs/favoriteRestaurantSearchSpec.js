/* import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restorans/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching restorans', () => {
  let presenter;
  let favoriteRestaurans;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
    <div id="restoran-search-container">
        <input id="query" type="text">
        <div class="restoran-result-container">
            <ul class="restorans">
            </ul>
        </div>
    </div>
    `;
  };

  const constructPresenter = () => {
    favoriteRestaurans = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurans,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
      it('should be able to capture the query typed by the user', () => {
        searchRestaurants('Restoran a'); 

        expect(presenter.latestQuery)
        .toEqual('Restoran a');
    });

  it('should ask the model to search for restorans', () => {
    searchRestaurants('Restoran a');

  expect(favoriteRestaurans.searchRestaurants)
        .toHaveBeenCalledWith('Restoran a');
    });
  
    it('should show the found restorans', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restoran').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        title: 'Satu',
      }, {
        id: 2,
        title: 'Dua',
      }]);
      expect(document.querySelectorAll('.restoran').length)
        .toEqual(2);
    });

  it('should show the title of the found restorans', () => {
    presenter._showFoundRestaurants([{
      id: 1,
      title: 'Satu',
    }]);
    expect(document.querySelectorAll('.restoran__title')
      .item(0).textContent)
      .toEqual('Satu');
  });

  it('should show the title of the found restorans', () => {
    presenter._showFoundRestaurants([{
      id: 1,
      title: 'Satu',
    }]);
    expect(document.querySelectorAll('.restoran__title')
      .item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundRestaurants(
      [{
        id: 1,
        title: 'Satu',
      }, {
        id: 2,
        title: 'Dua',
      }],
    );
  
    const restoTitles = document.querySelectorAll('.restoran__title');
      expect(restoTitles.item(0).textContent)
        .toEqual('Satu');
      expect(restoTitles.item(1).textContent)
        .toEqual('Dua');
    });


    it('should show - for found movie without title', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);

    expect(document.querySelectorAll('.restoran__title')
    .item(0).textContent)
    .toEqual('-');
  });

  it('should show the restorans found by Favorite restorans', (done) => {
    document.getElementById('restoran-search-container')
      .addEventListener('restorans:searched:updated', () => {
        expect(document.querySelectorAll('.restoran').length)
          .toEqual(3);
        done();
      });

      favoriteRestaurans.searchRestaurants.withArgs('restoran a')
      .and
      .returnValues([
        {
          id: 111,
          title: 'restoran abc',
        },
        {
          id: 222,
          title: 'ada juga restoran abcde',
        },
        {
          id: 333,
          title: 'ini juga boleh restoran a',
        },
      ]);

      searchRestaurants('restoran a');
  });

  it('should show the name of the movies found by Favorite Movies', (done) => {
    document.getElementById('restoran-search-container')
      .addEventListener('restorans:searched:updated', () => {
        const restoTitles = document.querySelectorAll('.restoran__title');
        expect(restoTitles.item(0).textContent)
          .toEqual('restoran abc');
        expect(restoTitles.item(1).textContent)
          .toEqual('ada juga restoran abcde');
        expect(restoTitles.item(2).textContent)
          .toEqual('ini juga boleh restoran a');

        done();
      });

      favoriteRestaurans.searchRestaurants.withArgs('restoran a')
      .and
      .returnValues([
        {
          id: 111,
          title: 'restoran abc',
        },
        {
          id: 222,
          title: 'ada juga restoran abcde',
        },
        {
          id: 333,
          title: 'ini juga boleh restoran a',
        },
      ]);

      searchRestaurants('restoran a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

        searchRestaurants('    ');
        expect(presenter.latestQuery.length)
          .toEqual(0);

          searchRestaurants('');
          expect(presenter.latestQuery.length)
            .toEqual(0);
            searchRestaurants('\t');
            expect(presenter.latestQuery.length)
              .toEqual(0);
          });
          it('should show all favorite movies', () => {
            searchRestaurants('    ');

            expect(favoriteRestaurans.getAllResto)
            .toHaveBeenCalled();
        });
      });
}); 
 */
