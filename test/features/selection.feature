Feature: Full Selection CRUD

  Background:
    Given I go to URI "/selection-crud"
    And I type "foo" in the input box of the "Select items" card header
    And I press ENTER
    And I type "bar" in the input box of the "Select items" card header
    And I press ENTER
    And I type "baz" in the input box of the "Select items" card header
    And I press ENTER

  Scenario: Creating Items
    Then I see 1 card(s) on the page
    And I see 3 Item(s) in the "Select items" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block

  Scenario: Selecting Items
    When I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see a "New selection" card
    And I see 2 Item(s) in the "New selection" card block
    And I find Item "foo" in the "New selection" card block
    And I find Item "baz" in the "New selection" card block

  Scenario: Unselecting Items
    When I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see a "New selection" card
    And I see 2 Item(s) in the "New selection" card block
    Then I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see a "New selection" card
    And I see 1 Item(s) in the "New selection" card block
    And I find Item "baz" in the "New selection" card block
    Then I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I see 1 card(s) on the page
    And I don't see a "New selection" card

  Scenario: Refreshing the page before saving a selection
    When I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see a "New selection" card
    And I see 2 Item(s) in the "New selection" card block
    Then I refresh the page
    Then I see 1 card(s) on the page
    And I don't see a "New selection" card
    And Item "foo" is not selected in the "Select items" card block
    And Item "baz" is not selected in the "Select items" card block

  Scenario: Saving a selection
    When I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I click on the "save" button of the "New selection" card header
    Then I see an input box in the "2nd" card header
    And I type "Sel1" in the input box of the "2nd" card header
    And I press ENTER
    Then I see 2 card(s) on the page
    And I see a "Selections" card
    And I see 1 Item(s) in the "Selections" card block
    And I find Item "Sel1" in the "Selections" card block
    And I see 4 Item(s) in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
