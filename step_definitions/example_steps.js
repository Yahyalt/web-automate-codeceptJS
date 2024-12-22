const { I } = inject();

Given('I am on the QR Code Generator page', () => {
  I.amOnPage('/generator'); // Navigates to the generator page
});

When('I select {string} from the Contents dropdown', () => {
  I.seeElement('//td[normalize-space()="Contents"]');
  I.seeElement('//body[1]/div[2]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[1]/td[2]/select[1]'); 
});



When('I fill in the {string} field with {string}', (field, value) => {
  // Define XPaths for different scenarios
  let xpathForField;

  // Check if the field matches known exceptions or follows the standard structure
  switch (field) {
    case "Phone number": // Replace with the specific field name
      xpathForField = '//tbody/tr[4]/td[2]/input[1]'; // Specific XPath for exceptions
      break;
    case "Company": // Add more special cases as needed
      xpathForField = '//tbody/tr[2]/td[2]/input[1]'; // Replace with the actual XPath
      break;
    default:
      xpathForField = `//td[normalize-space()="${field}"]/following-sibling::td//input`;
  }

  // Verify the field exists
  I.seeElement(xpathForField);

  // Fill the field with the provided value
  I.fillField(xpathForField, value);
});

When('I click on the {string} button', (buttonText) => {
  // Replace the buttonText with its corresponding XPath or CSS selector if needed
  I.click(`//button[contains(text(), '${buttonText}') or @value='${buttonText}']`);
  I.waitForElement('//img[@alt="Generated QR Code"]', 5); // Wait for the QR Code to appear
});


// Then('I should see a generated QR Code on the right', () => {
//   I.seeElement('//img[@alt="Generated QR Code"]'); // Verifies QR Code image
// });
