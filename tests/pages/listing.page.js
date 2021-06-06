const NativePage = require("./native.page.js");

class lisingPage extends NativePage {
  get westWingNowListingPageElement() {
    return this.getPage("listing.locators");
  }

  validateResultsFoundMessage() {
    const resultFound = $(this.westWingNowListingPageElement.resultFound);
    resultFound.waitForDisplayed();
  }

  exitTheOverlayPopup() {
    if (this.westWingNowListingPageElement.popupWrapper) {
      //Wait for overlay available
      const popupWrapper = $(this.westWingNowListingPageElement.popupWrapper);
      popupWrapper.waitForDisplayed();

      const overlay = $(this.westWingNowListingPageElement.overlay);
      overlay.waitForDisplayed();

      //Click on another element to close the overlay
      const thirdWishlistIcon = $(
        this.westWingNowListingPageElement.thirdWishlistIcon
      );
      thirdWishlistIcon.waitForDisplayed();
      thirdWishlistIcon.click();
    }
  }

  validateTheLoginRegisterOverlay() {
    const loginRegister = $(this.westWingNowListingPageElement.loginRegister);
    loginRegister.waitForDisplayed();
  }

  clickOnFirstWishListIcon() {
    const firstWishListIconEnabled = $(
      this.westWingNowListingPageElement.firstWishListIconEnabled
    );

    const wishListCounter = $(
      this.westWingNowListingPageElement.wishListCounter
    );

    if (!firstWishListIconEnabled.isExisting() && !wishListCounter.isExisting()) {
      const firstWishlistIcon = $(
        this.westWingNowListingPageElement.firstWishlistIcon
      );
      firstWishlistIcon.waitForClickable();
      firstWishlistIcon.click();
    }
  }

  productAddedToWishList() {
    const firstWishListIconEnabled = $(
      this.westWingNowListingPageElement.firstWishListIconEnabled
    );
    // firstWishListIconEnabled.waitForExist();
    expect(firstWishListIconEnabled).toBeExisting();

    const wishListCounter = $(
      this.westWingNowListingPageElement.wishListCounter
    );
    wishListCounter.isExisting();
    expect(wishListCounter).toHaveText('1', { ignoreCase: true })
  }
}

module.exports = lisingPage;
