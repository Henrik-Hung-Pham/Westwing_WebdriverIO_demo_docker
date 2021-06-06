Feature: Validate functionalities of WestwingNow

  @Search @Wishlist @Login
  Scenario Outline: Search, add to wishlist and delete the added item

    Given I am on the WestwingNow homepage
    When I search for <search keyword>
    Then I should see product listing page with a list of products
    Then  I exit the overlay popup if there is any
    When I click on wishlist icon of the first found product
    Then I should see the login-registration overlay
    Then I switch to login form of the overlay
    When I log in with <user>
    Then The product should be added to the wishlist
    When I go to the wishlist page
    Then I delete the product from my wishlist
    Then My wishlist should be empty

    Examples:
      | search keyword | user   |
      | möbel          | user_1 |
      | deko           | user_2 |
      | garten         | user_1 |
      | neu            | user_2 |
