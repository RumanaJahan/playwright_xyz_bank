# XYZ Bank Playwright Test Project

This project contains automated end-to-end tests for the XYZ Bank demo application using [Playwright](https://playwright.dev/).

## Project Structure

- `tests/Manager/` - Test cases for manager functionalities (add customer, delete customer, etc.)
- `tests/Customer/` - Test cases for customer functionalities (login, deposit, withdraw, etc.)
- `tests/PageObject/` - Page Object Model (POM) files for reusable actions and selectors
- `playwright.config.js` - Playwright configuration file
- `package.json` - Project dependencies and scripts

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm

### Install Dependencies
```
npm install
```

### Run a Test
To run the 'Add Customer' manager test in headed mode:
```
npm run test:customer:add
```

### Run All Tests
```
npx playwright test
```

## Writing Tests
- Use the Page Object Model files in `tests/PageObject/` for reusable actions.
- Add new test files in the appropriate `tests/Manager/` or `tests/Customer/` folder.

## Useful Links
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [XYZ Bank Demo App](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login)

## License
This project is for demo and educational purposes only.
