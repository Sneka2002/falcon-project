Feature: Login Functionality

  Scenario: Verify Confirmed Records
    Given I navigate to expo-air website
    Then I filter the confirmed records
    Then verify the confirmed records

  Scenario: Verify Confirmed Records Under My Bookings
    Given I navigate to the landing page
    Then I filter the confirmed records under my bookings
    Then verify confirmed records under my bookings

  Scenario: Verify Draft Records
    Given navigate to expo-air website
    Then I filter the draft records
    Then verify draft records

  Scenario: Verify Draft Records Under My Bookings
    Given navigate to the landing page
    Then filter the draft records
    Then verify draft records under my bookings
  
  Scenario: reload the page
    Given navigate to expo-air landing page
    Then want to filter confirmed my bookings records
    Then verify the confirmed my booking records
    Then reload the page
    Then after reload