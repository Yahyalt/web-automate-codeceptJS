const { I } = inject();

Given('I am on the QR Code Generator page', () => {
  I.amOnPage('http://zxing.appspot.com/generator/');
});

When('I select {string} from the Contents dropdown', (option) => {
  I.selectOption('Contents', option); // Replace 'Contents' with the exact selector if needed
});

When('I fill in the {string} field with {string}', (field, value) => {
  I.fillField(field, value); // Replace field name selectors as necessary
});

When('I click on the {string} button', (buttonText) => {
  I.click(buttonText);
  I.wait(2); // Wait for the QR Code to generate
});

Then('I should see a generated QR Code on the right', () => {
  I.seeElement('//img[@alt="Generated QR Code"]'); // Ensure the selector matches the generated QR Code
});
