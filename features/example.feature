Feature: Generate QR Code
  As a user
  I want to generate a QR Code by filling in the form
  So that I can use the QR Code for various purposes

  Scenario: Generate QR Code with contact information
    Given I am on the QR Code Generator page
    When I select "Contact Information" from the Contents dropdown
    And I fill in the "Name" field with "Yahya Hafidz"
    And I fill in the "Company" field with "Acme Corp"
    And I fill in the "Title" field with "Software Engineer"
    And I fill in the "Phone number" field with "1234567890"
    And I fill in the "Email" field with "yahya.hafidz@example.com"
    And I fill in the "Address" field with "123 Elm Street"
    And I fill in the "Address 2" field with "Suite 400"
    And I fill in the "Website" field with "https://example.com"
    And I fill in the "Memo" field with "This is a test memo"
    And I click on the "Generate" button
    Then I should see a generated QR Code on the right
    And I click on the download link

  Scenario: Upload and Decode a QR Code Image
    Given I am on the QR code decoder page
    When I upload a QR code image
    And I click the "Submit" button
    Then I should see the decoded text in the "Decoded" text area


