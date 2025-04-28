Feature: Display records in landing page on searching the status - “Draft” and “Confirmed”

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

  #Feature: Pagination10

  Scenario: Verify each page have only 10 records under all bookings
    Given select all bookings records
    Then Get the pagination value
    Then verify the page has only 10 records

  Scenario: Verify each page have only 10 confirmed records under my bookings
    Given filter the confirmed records under my bookings
    Then verify the page has only 10 confirmed records

  Scenario: verify each page have only 10 draft records under all bookings
    Given filter 10 draft records under all bookings
    Then verify the page has only 10 draft records

    #Pagination 20

  Scenario: Verify each page have only 20 records under all bookings
    Given login to expo landing page
    Then Get the pagination value as 20
    Then verify the page has only 20 records

  Scenario: Verify each page have only 20 confirmed records under my bookings
    Given filter the 20 confirmed records under my bookings
    Then verify the page has only 20 confirmed records

  Scenario: verify each page have only 20 draft records under all bookings
    Given filter 20 draft records under all bookings
    Then verify the page has only 20 draft records

        #Pagination 30

  Scenario: Verify each page have only 30 records under all bookings
    Given select all bookings for default 30
    Then Get the pagination value as 30
    Then verify the page has only 30 records

  Scenario: Verify each page have only 30 confirmed records under my bookings
    Given filter the 30 confirmed records under my bookings
    Then verify the page has only 30 confirmed records

  Scenario: verify each page have only 30 draft records under all bookings
    Given filter 30 draft records under all bookings
    Then verify the page has only 30 draft records