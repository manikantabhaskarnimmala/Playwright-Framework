# Playwright Automation Framework (TypeScript)

This repository contains a **Playwright Test Automation Framework** built using **TypeScript**, following **Page Object Model (POM)**, **Data‑Driven Testing**, and **industry best practices**.  
The framework is designed for scalable UI automation with reporting and CI readiness.

---

## 🧰 Prerequisites

Make sure the following tools are installed before running the project:

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **Visual Studio Code (VS Code)**

---

## 🚀 Project Setup

### 1 Create Playwright Project
Initialize a new Playwright project using the command below:

npm init playwright@latest

Choose the following options when prompted:
Language: TypeScript
Test directory: tests
GitHub Actions: Optional
Install Playwright browsers: Yes

### 2 Install Additional Dependencies
npm install csv-parse
npm install xlsx
npm install -D allure-playwright
npm install @faker-js/fake

### 3 Project Folder Structure
PlaywrightFramework/
├── pages/                 # Page Object Model classes
├── tests/                 # Test specifications
├── utils/                 # Utilities (data providers, helpers)
├── data/                  # Test data files (JSON, CSV)
├── allure-results/        # Allure raw test results
├── playwright.config.ts   # Playwright configuration
├── test.config.ts         # Global test data/config
├── package.json
├── README.md


### 4 Page Object Model (POM)
Each application page has its own class under the pages/ folder.
This improves maintainability, reusability, and readability.
Example Page Objects:
HomePage.ts
RegistrationPage.ts
LoginPage.ts
LogoutPage.ts
MyAccountPage.ts
ProductPage.ts
SearchResultsPage.ts
ShoppingCartPage.ts
CheckoutPage.ts


### 5 Test Cases
All test cases are located under the tests/ folder.
Example tests:

AccountRegistration.spec.ts
Login.spec.ts
LoginDDT.spec.ts
Logout.spec.ts
SearchProduct.spec.ts
AddToCart.spec.ts
EndToEndTest.spec.ts

