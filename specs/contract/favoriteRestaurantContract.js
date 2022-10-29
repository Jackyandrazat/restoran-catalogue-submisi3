const itActsAsFavoriteRestoranModel = (favoriteRestoran) => {
    it('should return the restaurant that has been added', async () => {
      favoriteRestoran.putResto({ id: 1 });
      favoriteRestoran.putResto({ id: 2 });
  
      expect(await favoriteRestoran.getResto(1))
        .toEqual({ id: 1 });
      expect(await favoriteRestoran.getResto(2))
        .toEqual({ id: 2 });
      expect(await favoriteRestoran.getResto(3)) 
        .toEqual(undefined);
    });
  
    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
      favoriteRestoran.putResto({ aProperty: 'property' });
  
      expect(await favoriteRestoran.getAllResto())
        .toEqual([]);
    });
  
    it('can return all of the restaurants that have been added', async () => {
      favoriteRestoran.putResto({ id: 1 });
      favoriteRestoran.putResto({ id: 2 });
  
      expect(await favoriteRestoran.getAllResto())
        .toEqual([
          { id: 1 },
          { id: 2 },
        ]);
    });
  
    it('should remove favorite restaurant', async () => {
      favoriteRestoran.putResto({ id: 1 });
      favoriteRestoran.putResto({ id: 2 });
      favoriteRestoran.putResto({ id: 3 });
  
      await favoriteRestoran.deleteResto(1);
  
      expect(await favoriteRestoran.getAllResto())
        .toEqual([
          { id: 2 },
          { id: 3 },
        ]);
    });
  
    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
      favoriteRestoran.putResto({ id: 1 });
      favoriteRestoran.putResto({ id: 2 });
      favoriteRestoran.putResto({ id: 3 });
  
      await favoriteRestoran.deleteResto(4);
  
      expect(await favoriteRestoran.getAllResto())
        .toEqual([
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ]);
    });
  };
  
  export { itActsAsFavoriteRestoranModel };