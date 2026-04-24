/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */


import { test, expect } from '@playwright/test';


import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtils } from '../utils/RandomDataGenerator';
import { TestConfig } from '../test.config';

let config: TestConfig;
let hp: HomePage;
let rp: RegistrationPage;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();
    await page.goto(config.appUrl);

    //Instance reference
    hp = new HomePage(page);
    rp = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
});



test('Account Registration', { tag: ["@sanity", "@regression", "@master"] }, async ({ page }) => {



    //go to my account & click register
    await hp.clickMyAccount();
    await hp.clickRegister();

    //FIll the registration form

    await rp.setFirstName(RandomDataUtils.getFirstName());
    await rp.setLastName(RandomDataUtils.getLastName());
    await rp.setEmail(RandomDataUtils.getEmail());
    await rp.setTelephone(RandomDataUtils.getPhoneNumber());
    const password = RandomDataUtils.getPassword();
    await rp.setPassword(password);
    await rp.setConfirmPassword(password);
    await rp.setPrivacyPolicy();
    await rp.clickContinue();

    //validation
    const confirmMessage = await rp.getConfirmationMsg();
    await expect(confirmMessage).toBe("Your Account Has Been Created!");


})

