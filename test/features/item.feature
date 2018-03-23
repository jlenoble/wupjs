Feature: Full Item CRUD

  Scenario: Entering the Items page for the first time
    When I go to URI "/items"
    Then I see a "All items" card
    And I see an input box in the "All items" card header
    And I see 0 Item(s) in the "All items" card block

  Scenario: Creating a first Item - pressing ENTER
    Given I go to URI "/items"
    And I see 0 Item(s) in the "All items" card block
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I see 1 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block

  Scenario: Creating a second Item - Clicking on the input box button
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye world" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block

  Scenario: Persistance of the two Items
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye world" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    And I refresh the page
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block

  Scenario: Updating an Item - pressing ENTER
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye wrld" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    And I click on the "pencil" button of the "Bye wrld" Item in the "All items" card block
    Then I see an input box prefilled with "Bye wrld" in the "All items" card block
    And I type "Bye world" in the "Bye wrld" input box in the "All items" card block
    And I press ENTER
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Bye world" in the "All items" card block
    And I don't find Item "Bye wrld" in the "All items" card block

  Scenario: Updating an Item - Clicking on the input box button
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye wrld" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    And I click on the "pencil" button of the "Bye wrld" Item in the "All items" card block
    Then I see an input box prefilled with "Bye wrld" in the "All items" card block
    And I type "Bye world" in the "Bye wrld" input box in the "All items" card block
    And I click on the "save" button of the "Bye wrld" input box in the "All items" card block
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Bye world" in the "All items" card block
    And I don't find Item "Bye wrld" in the "All items" card block

  Scenario: Deleting an Item
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye world" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    And I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I click on the "trash-o" button of the "Hello world" Item in the "All items" card block
    Then I see 1 Item(s) in the "All items" card block
    And I don't find Item "Hello world" in the "All items" card block

  Scenario: Deleting the last Item
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye world" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header
    And I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I click on the "trash-o" button of the "Hello world" Item in the "All items" card block
    Then I see 1 Item(s) in the "All items" card block
    And I don't find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block
    And I click on the "trash-o" button of the "Bye world" Item in the "All items" card block
    Then I see O Item(s) in the "All items" card block
