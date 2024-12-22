
Feature('Example Test');

Scenario('Verify homepage title', async ({ I }) => {
  I.amOnPage('/');
  I.seeInTitle('Welcome');
});
