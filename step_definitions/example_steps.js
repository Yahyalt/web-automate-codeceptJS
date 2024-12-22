const { I } = inject();

Given('I am on the QR Code Generator page', () => {
  I.amOnPage('/generator'); 
});

When('I select {string} from the Contents dropdown', () => {
  I.seeElement('//td[normalize-space()="Contents"]');
  I.seeElement('//body[1]/div[2]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[1]/td[1]/table[1]/tbody[1]/tr[1]/td[2]/select[1]'); 
  I.wait(2);
});



When('I fill in the {string} field with {string}', (field, value) => {
  
  let xpathForField;

  switch (field) {
    case "Phone number": 
      xpathForField = '//tbody/tr[4]/td[2]/input[1]'; 
      break;
    case "Company":
      xpathForField = '//tbody/tr[2]/td[2]/input[1]';
      break;
    default:
      xpathForField = `//td[normalize-space()="${field}"]/following-sibling::td//input`;
  }


  I.seeElement(xpathForField);


  I.fillField(xpathForField, value);
  I.wait(2);
});

When('I click on the {string} button', (buttonText) => {
  
  I.click(`//button[contains(text(), '${buttonText}') or @value='${buttonText}']`);
  I.waitForElement('//img[@class="gwt-Image"]', 5);
});


Then('I should see a generated QR Code on the right', () => {
  I.seeElement('//img[@class="gwt-Image"]'); 
  I.wait(5)
});

Then('I click on the download link', async () => {
  I.waitForElement('//a[@id="downloadlink"]', 5);
  I.click('//a[@id="downloadlink"]');
  I.wait(2);
});



// Step to navigate to the decoder page
Given('I am on the QR code decoder page', async () => {
  await I.amOnPage('https://m28dev.github.io/qrdecoder/');
});

// Step to upload the image
When('I upload a QR code image', async () => {
  await I.attachFile('input[type="file"]', './data/qr-code-image.png');
  I.wait(2);
});

// Step to click the submit button
When('I click the "Submit" button', async () => {
  await I.click('Submit');
  I.wait(2);
});

// Step to verify the decoded text
Then('I should see the decoded text in the "Decoded" text area', async () => {
  await I.seeElement('textarea');
  const decodedText = await I.grabTextFrom('textarea');
  await I.say(`Decoded text is: ${decodedText}`);
  I.wait(8);
});





