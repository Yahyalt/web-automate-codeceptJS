// in this file you can append custom step methods to 'I' object
// Learn more at https://codecept.io/helpers/

module.exports = function() {
  return actor({
    // Define a custom login step that can be reused in tests
    // login(username, password) {
    //   this.say('Logging in with provided credentials');
    //   this.amOnPage('/login'); // Navigate to the login page
    //   this.fillField('Username', username); // Replace 'Username' with the selector for the username field
    //   this.fillField('Password', password); // Replace 'Password' with the selector for the password field
    //   this.click('Login'); // Replace 'Login' with the selector for the login button
    //   this.waitForNavigation(); // Wait for navigation after login
    //   this.say('Login successful');
    // },

    // // Example custom step to check if a user is logged in
    // checkUserLoggedIn() {
    //   this.seeElement('.user-profile'); // Replace '.user-profile' with a selector that indicates the user is logged in
    //   this.say('User is logged in');
    // }
  });
};
