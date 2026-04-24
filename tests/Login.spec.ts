import {test, expect} from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";
import { RandomDataUtils } from "../utils/RandomDataGenerator";

let config:TestConfig;
let hp:HomePage;
let lp :LoginPage;
let map :MyAccountPage;

test.beforeEach(async({page})=>{
    config = new TestConfig(); 
    await page.goto(config.appUrl);

    //Instance reference
    hp = new HomePage(page);
    lp = new LoginPage(page);
    map = new MyAccountPage(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
});

test("Login Test", async ({ })=>{

    await hp.clickMyAccount();
    await hp.clickLogin();


    //Login Page
    await lp.setEmail(config.email); //enter email
    await lp.setPassword(config.password); //enter password
    await lp.clickLogin(); //clicks login

    //My Account Page
    const message = await map.isMyAccountPageExists();
    expect(message).toBeTruthy();
});

