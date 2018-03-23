Feature: Full Selection CRUD

  Scenario: Entering the Selection CRUD page for the first time
    Given I go to URI "/selection-crud"
    Then I see 1 card(s) on the page
    And I see a "Select items" card
    And I see an input box in the "Select items" card header
    And I see 0 Item(s) in the "Select items" card block

  Scenario: Creating Items
    Given I go to URI "/selection-crud"
    And I type "foo" in the input box of the "Select items" card header
    And I press ENTER
    And I type "bar" in the input box of the "Select items" card header
    And I press ENTER
    And I type "baz" in the input box of the "Select items" card header
    And I press ENTER
    Then I see 1 card(s) on the page
    And I see 3 Item(s) in the "Select items" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block

  Scenario: Selecting Items
    Given I go to URI "/selection-crud"
    And I type "foo" in the input box of the "Select items" card header
    And I press ENTER
    And I type "bar" in the input box of the "Select items" card header
    And I press ENTER
    And I type "baz" in the input box of the "Select items" card header
    And I press ENTER
    And I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see a "New selection" card
    And I see 2 Item(s) in the "New selection" card block
    And I find Item "foo" in the "New selection" card block
    And I don't find Item "bar" in the "New selection" card block
    And I find Item "baz" in the "New selection" card block
