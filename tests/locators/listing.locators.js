class listingLocators {
  constructor() {
    this.resultFound = '//*[@data-testid="generic-product"]';
    this.firstWishlistIcon = '(//*[@data-testid="wishlist-icon"])[1]';
    this.thirdWishlistIcon = '(//*[@data-testid="wishlist-icon"])[3]';
    this.firstWishListIconEnabled = '(//*[@data-testid="wishlist-icon"])[1]/*[@data-is-selected="true"]';
    this.wishListCounter = '//*[@data-testid="wishlist-counter"]';

    this.overlay = '//*[@data-testid="shop_to_club_registration_single_step_overlay"]';
    this.popupWrapper = '//*[@data-testid="shop-to-club-popup-wrapper"]';
    this.loginRegister = '//*[@data-testid="login_and_register"]';
  }
}

module.exports = listingLocators;
