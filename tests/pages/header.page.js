const NativePage = require("./native.page.js");

class header extends NativePage {
  get westWingNowHeaderPageElement() {
    return this.getPage("header.locators");
  }

  goToWishList() {
    const wishList = $(this.westWingNowHeaderPageElement.wishList);
    wishList.click();
  }
}

module.exports = header;
