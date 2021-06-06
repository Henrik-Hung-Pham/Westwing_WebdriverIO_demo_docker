const NativePage = require('./native.page.js');
const westWingNowHomePageData = require('../files/testData/home.data.js');

class homePage extends NativePage {

  get westWingNowHomePageElement() {
    return this.getPage('home.locators');
  }

  openWestwingNowHomepage() {
    browser.reloadSession()
    browser.url(westWingNowHomePageData['url']);

    if(this.westWingNowHomePageElement.acceptCookies){
      const acceptCookies = $(this.westWingNowHomePageElement.acceptCookies)
      acceptCookies.click()
    }
  }

  searchKeyword(searchKeyword) {
    const searchField = $(this.westWingNowHomePageElement.searchField)
    searchField.click()
    searchField.setValue(searchKeyword)

    browser.keys("Enter")
  }
}

module.exports = homePage;
