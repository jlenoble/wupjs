Feature: Full Item CRUD

  Background:
    Given I go to URI "/items"
    And I type "Hello world" in the input box of the "All items" card header
    And I press ENTER
    And I type "Bye world" in the input box of the "All items" card header
    And I click on the "plus" button of the "All items" card header

  Scenario: Creating Items (see Background)
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block

  Scenario: Persistance of the two Items
    When I refresh the page
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block

  Scenario: Updating an Item by pressing ENTER
    When I click on the "pencil" button of the "Bye world" Item in the "All items" card block
    Then I see an input box prefilled with "Bye world" in the "All items" card block
    Then I type "Bye bye world" in the "Bye world" input box in the "All items" card block
    And I press ENTER
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Bye bye world" in the "All items" card block
    And I don't find Item "Bye world" in the "All items" card block

  Scenario: Updating an Item by clicking on the input box button
    When I click on the "pencil" button of the "Bye world" Item in the "All items" card block
    Then I see an input box prefilled with "Bye world" in the "All items" card block
    Then I type "Bye bye world" in the "Bye world" input box in the "All items" card block
    And I click on the "save" button of the "Bye world" input box in the "All items" card block
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Bye bye world" in the "All items" card block
    And I don't find Item "Bye world" in the "All items" card block

  Scenario: Deleting Items
    Then I see 2 Item(s) in the "All items" card block
    And I find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block
    And I click on the "trash-o" button of the "Hello world" Item in the "All items" card block
    Then I see 1 Item(s) in the "All items" card block
    And I don't find Item "Hello world" in the "All items" card block
    And I find Item "Bye world" in the "All items" card block
    And I click on the "trash-o" button of the "Bye world" Item in the "All items" card block
    Then I see O Item(s) in the "All items" card block
