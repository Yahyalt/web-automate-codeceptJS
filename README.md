# Introduction

This project uses CodeceptJS with BDD to run end-to-end tests. Follow the steps below to set up and run the tests.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/codeceptjs_project_with_bdd.git
   ```
2. Navigate to the project directory:
   ```bash
   cd codeceptjs_project_with_bdd
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, use the following command:
```bash
npx codeceptjs run
```

For more detailed output, you can run:
```bash
npx codeceptjs run --steps
 or like this
npx codeceptjs run ./features/example.feature --steps
```

## Conclusion

You have successfully set up and run the tests for the CodeceptJS project with BDD. For more information, refer to the [CodeceptJS documentation](https://codecept.io/).