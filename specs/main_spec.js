const assert = require('assert');
const MainPage = require('../page_objects/mainPage_PO.js').MainPage;
const mainPage = new MainPage();

describe('DOU page', () => {
    it('should open dou', () => {
        browser.url('');
        const title = browser.getTitle();   
        assert.equal(title, 'Сообщество программистов | DOU', 'INCORRECT TITLE');
    });

    it('should open calendar', () => {
        mainPage.clickCalendarButton();
        const title = browser.getTitle();
        assert.equal(title, 'Календарь ИТ-событий | DOU');
    });

    it('should make a search', () => {
        mainPage.makeSearch('hello');
        let searchRequesst = mainPage.searchField.getValue();
        console.log(`My search request is: ${searchRequesst}`); 
    })
})