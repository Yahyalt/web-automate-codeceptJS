Feature: Generate QR Code
  As a user
  I want to generate a QR Code by filling in the form
  So that I can use the QR Code for various purposes

  Scenario: Generate QR Code with contact information
    Given I am on the QR Code Generator page
    When I select "Contact information" from the Contents dropdown
    And I fill in the "Name" field with "John Doe"
    And I fill in the "Phone number" field with "1234567890"
    And I click on the "Generate" button
    Then I should see a generated QR Code on the right
