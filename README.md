# Web Automation with CodeceptJS - QR Code Testing Suite

This project is an automated web testing suite built with CodeceptJS and BDD (Behavior-Driven Development) using Gherkin syntax. It focuses on testing QR code generation and decoding functionality across different web applications.

## 🎯 Project Overview

The test suite validates QR code workflows including:
- QR code generation with contact information
- QR code image upload and decoding
- Form validation and user interface interactions

## 📋 Test Specifications

### Test Scenarios

#### 1. QR Code Generation (zxing.appspot.com)
**Feature**: Generate QR Code with Contact Information
- **Given**: User is on the QR Code Generator page
- **When**: User selects "Contact Information" from dropdown
- **And**: Fills in contact details (Name, Company, Title, Phone, Email, Address, Website, Memo)
- **And**: Clicks "Generate" button
- **Then**: QR code is generated and displayed
- **And**: Download link is available

**Test Data Used**:
- Name: "Yahya Hafidz"
- Company: "Acme Corp"
- Title: "Software Engineer"
- Phone: "1234567890"
- Email: "yahya.hafidz@example.com"
- Address: "123 Elm Street, Suite 400"
- Website: "https://example.com"
- Memo: "This is a test memo"

#### 2. QR Code Decoding (m28dev.github.io/qrdecoder)
**Feature**: Upload and Decode QR Code Image
- **Given**: User is on the QR code decoder page
- **When**: User uploads a QR code image file
- **And**: Clicks "Submit" button
- **Then**: Decoded text is displayed in the text area

**Test Data**: Uses `./data/qr-code-image.png` for upload testing

## 🛠️ Technical Configuration

### Test Framework Stack
- **CodeceptJS**: v3.5.0 - Main testing framework
- **Puppeteer**: v23.11.1 - Browser automation
- **Gherkin**: BDD syntax for feature files
- **Node.js**: Runtime environment

### Browser Configuration
- **Target URL**: http://zxing.appspot.com/
- **Window Size**: 1200x900
- **Headless Mode**: Disabled (show: true)

### Plugins Enabled
- **retryFailedStep**: Automatically retries failed steps
- **screenshotOnFail**: Captures screenshots on test failures

## 🚀 Prerequisites

- **Node.js**: v12 or higher
- **npm**: v6 or higher
- **Git**: For version control

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/web-automate-codeceptJS.git
   cd web-automate-codeceptJS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npx codeceptjs --version
   ```

## 🧪 Running Tests

### Basic Test Execution
```bash
# Run all tests
npx codeceptjs run

# Run with detailed step output
npx codeceptjs run --steps

# Run using npm script
npm test
```

### Advanced Test Execution
```bash
# Run specific feature file
npx codeceptjs run ./features/example.feature --steps

# Run with verbose output
npx codeceptjs run --verbose

# Run tests with custom reporter
npx codeceptjs run --reporter spec

# Run tests in headless mode
npx codeceptjs run --override '{"helpers": {"Puppeteer": {"show": false}}}'
```

### Debug Mode
```bash
# Run in debug mode (step-by-step execution)
npx codeceptjs run --debug

# Run with pause on specific step
npx codeceptjs run --grep "Generate QR Code" --debug
```

## 📁 Project Structure

```
web-automate-codeceptJS/
├── features/
│   └── example.feature           # BDD feature definitions
├── step_definitions/
│   └── example_steps.js          # JavaScript step implementations
├── data/
│   └── qr-code-image.png        # Test data files
├── output/                       # Test results and screenshots
├── codecept.conf.js             # CodeceptJS configuration
├── steps_file.js                # Custom step definitions
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## 🔧 Configuration Details

### CodeceptJS Configuration (`codecept.conf.js`)
- **Tests Path**: `./features/**/*.feature`
- **Output Directory**: `./output`
- **Helper**: Puppeteer with custom URL and window size
- **Gherkin Integration**: Enabled with feature and step file paths

### Package Scripts
- `npm test`: Runs CodeceptJS with step details

## 🧪 Test Data Management

The project includes test data files in the `data/` directory:
- `qr-code-image.png`: Sample QR code image for upload testing

## 🐛 Troubleshooting

### Common Issues

1. **Browser Launch Issues**:
   ```bash
   # Install Chromium if missing
   npx puppeteer browsers install chrome
   ```

2. **Test Timeouts**:
   - Increase wait times in step definitions
   - Check network connectivity to target sites

3. **Element Not Found**:
   - Verify XPath selectors are correct
   - Check if page structure has changed

4. **File Upload Issues**:
   - Ensure test data files exist in `./data/` directory
   - Check file permissions

### Debug Commands
```bash
# Generate new step definitions
npx codeceptjs gherkin:snippets

# Dry run (syntax check)
npx codeceptjs run --dry-run

# Generate configuration file
npx codeceptjs init
```

## 📊 Test Reports

Test results are generated in the `./output/` directory:
- Screenshots on failures
- Detailed step logs
- Test execution reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test`
3. Add your test scenarios in `features/`
4. Implement step definitions in `step_definitions/`
5. Run tests: `npm test`
6. Commit changes: `git commit -am 'Add new test scenario'`
7. Push to branch: `git push origin feature/new-test`
8. Create Pull Request

### Writing New Tests
- Follow BDD principles with Given-When-Then structure
- Use descriptive scenario names
- Keep step definitions reusable
- Add appropriate wait times for stability

## 📚 Additional Resources

- [CodeceptJS Documentation](https://codecept.io/)
- [Puppeteer Guide](https://pptr.dev/)
- [Gherkin Syntax Reference](https://cucumber.io/docs/gherkin/)
- [BDD Best Practices](https://cucumber.io/docs/bdd/)

## 📄 License

This project is licensed under the ISC License.

---

**Note**: This project is configured to test external websites. Ensure stable internet connectivity and be aware that external site changes may affect test reliability.