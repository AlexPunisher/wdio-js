//const wdio = require('wdio-chromedriver-service');
class MainPage {

    get calendarButton(){return $('.m-last');}
    get searchField(){return $('#txtGlobalSearch')}
   
    clickCalendarButton(){        
        this.calendarButton.click();
    }
    makeSearch(search){
        this.searchField.click();
        this.searchField.clearValue();
        this.searchField.setValue(search);   
        //click enter ))     
    }
    

}
module.exports = {MainPage:MainPage};