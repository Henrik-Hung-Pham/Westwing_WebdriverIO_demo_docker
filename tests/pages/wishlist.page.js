const NativePage = require("./native.page.js");

class wishlist extends NativePage {
  get westWingNowWishlistPageElement() {
    return this.getPage("wishlist.locators");
  }

  deleteWishList() {
    const deleteWishlistElements = $$(this.westWingNowWishlistPageElement.deleteWishlist);

    deleteWishlistElements.forEach(deleteWishlist => {
      deleteWishlist.click()
    });
  }

  wishlistShouldBeEmpty() {
    const deleteWishlistElements = $$(this.westWingNowWishlistPageElement.deleteWishlist);

    expect(deleteWishlistElements).toBeNull()
  }
}

module.exports = wishlist;
