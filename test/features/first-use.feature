Feature: Visiting pages on first use

  Scenario: Entering the Items page for the first time
    When I go to URI "/items"
    Then I see 1 card(s) on the page
    And I see a "All items" card
    And I see an input box in the "All items" card header
    And I see 0 Item(s) in the "All items" card block

  Scenario: Entering the Selection CRUD page for the first time
    Given I go to URI "/selection-crud"
    Then I see 1 card(s) on the page
    And I see a "Select items" card
    And I see an input box in the "Select items" card header
    And I see 0 Item(s) in the "Select items" card block
