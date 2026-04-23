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

import { Config } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtils } from '../utils/RandomDataGenerator';

let config:Config;
let hp:HomePage;
let rp:RegistrationPage;
test.beforeEach(async({page})=>{

})


test('Account Registration', async()=>{

})

