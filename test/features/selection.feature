Feature: Selection CRUD

  Background:
    Given I go to URI "/selection-crud"
    And I type "foo" in the input box of the "Select items" card header
    And I press ENTER
    And I type "bar" in the input box of the "Select items" card header
    And I press ENTER
    And I type "baz" in the input box of the "Select items" card header
    And I press ENTER
    Given I toggle the "check" checkbox of Item "foo" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Given I click on the "save" button of the "New selection" card header
    Given I type "Sel1" in the input box of the "2nd" card header
    And I press ENTER
    Given I toggle the "check" checkbox of Item "bar" in the "Select items" card block
    And I toggle the "check" checkbox of Item "baz" in the "Select items" card block
    Given I click on the "save" button of the "New selection" card header
    Given I type "Sel2" in the input box of the "2nd" card header
    And I press ENTER

  Scenario: Persistance - Refreshing the page
    Then I see 2 card(s) on the page
    And I see a "Select items" card
    And I see a "Selections" card
    And I see 5 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    And Item "foo" is not selected in the "Select items" card block
    And Item "bar" is not selected in the "Select items" card block
    And Item "baz" is not selected in the "Select items" card block
    And Item "Sel1" is not selected in the "Select items" card block
    And Item "Sel2" is not selected in the "Select items" card block
    Then I refresh the page
    Then I see 2 card(s) on the page
    And I see a "Select items" card
    And I see a "Selections" card
    And I see 5 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    And Item "foo" is not selected in the "Select items" card block
    And Item "bar" is not selected in the "Select items" card block
    And Item "baz" is not selected in the "Select items" card block
    And Item "Sel1" is not selected in the "Select items" card block
    And Item "Sel2" is not selected in the "Select items" card block

  Scenario: Deleting a selection
    When I click on the "trash-o" button of the "Sel1" Item in the "Selections" card block
    Then I see 2 card(s) on the page
    And I see 4 Item(s) in the "Select items" card block
    And I see 1 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block
    And I don't find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I don't find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    When I click on the "trash-o" button of the "Sel2" Item in the "Selections" card block
    Then I see 1 card(s) on the page
    And I see 3 Item(s) in the "Select items" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block

  Scenario: Deleting a selected item
    When I click on the "trash-o" button of the "baz" Item in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see 4 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    When I click on the "trash-o" button of the "foo" Item in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see 3 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    When I click on the "trash-o" button of the "bar" Item in the "Select items" card block
    Then I see 2 card(s) on the page
    And I see 2 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block

  Scenario: Editing a Selection
    When I click on the "pencil" button of the "Sel1" Item in the "Selections" card block
    Then I see 3 card(s) on the page
    And I see a "Select items" card
    And I see a "Sel1" card
    And I see a "Selections" card
    And I see 5 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Sel1" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block
    And I find Item "Sel1" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "foo" in the "Sel1" card block
    And I find Item "baz" in the "Sel1" card block
    And I find Item "Sel1" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    And Item "foo" is selected in the "Select items" card block
    And Item "bar" is not selected in the "Select items" card block
    And Item "baz" is selected in the "Select items" card block
    And Item "Sel1" is not selected in the "Select items" card block
    And Item "Sel2" is not selected in the "Select items" card block

  Scenario: Renaming a Selection on edit
    When I click on the "pencil" button of the "Sel1" Item in the "Selections" card block
    And I click on the "pencil" button of the "Sel1" card header
    And I type "Sel3" in the input box of the "2nd" card header
    And I press ENTER
    Then I see 3 card(s) on the page
    And I see a "Select items" card
    And I see a "Sel3" card
    And I see a "Selections" card
    And I see 5 Item(s) in the "Select items" card block
    And I see 2 Item(s) in the "Sel3" card block
    And I see 2 Item(s) in the "Selections" card block
    And I find Item "foo" in the "Select items" card block
    And I find Item "bar" in the "Select items" card block
    And I find Item "baz" in the "Select items" card block
    And I find Item "Sel3" in the "Select items" card block
    And I find Item "Sel2" in the "Select items" card block
    And I find Item "foo" in the "Sel3" card block
    And I find Item "baz" in the "Sel3" card block
    And I find Item "Sel3" in the "Selections" card block
    And I find Item "Sel2" in the "Selections" card block
    And Item "foo" is selected in the "Select items" card block
    And Item "bar" is not selected in the "Select items" card block
    And Item "baz" is selected in the "Select items" card block
    And Item "Sel3" is not selected in the "Select items" card block
    And Item "Sel2" is not selected in the "Select items" card block
