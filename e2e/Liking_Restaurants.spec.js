Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
  });

  Scenario('Aku Melakukan Proses Menyukai dan Tidak Menyukai  Resto', ({ I }) => {
    I.seeElement( '#restos');
    I.see('', '#restos');
    I.amOnPage('/');

    //menyukai resto
    I.waitForElement('.restoran-item__content a',20);
    I.seeElement('.restoran-item__content a');
    I.click(locate('.restoran-item__content a').first()); 

    I.waitForElement('#likeButton', 20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');

    //tidakmenyukairesto
   
    I.waitForElement('.restoran-item__content a',20);
    I.seeElement('.restoran-item__content a');
    I.click(locate('.restoran-item__content a').first()); 
    
    
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
   
    I.seeElement( '#restos');
    I.see('', '#restos');
   
});