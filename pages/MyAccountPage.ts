import { Page, Locator } from "@playwright/test";

export class MyAccountPage {

    private readonly page: Page;

    //Locators
    private readonly msgHeading: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.msgHeading = page.locator('h2:has-text("My Account")');
    }

    //action methods
    async isMyAccountPageExists(): Promise<boolean> {
        try {
            const isVisible = await this.msgHeading.isVisible();
            return isVisible;
        } catch (error) {
            console.log(`Exception occured while checking account page is visible: ${error}`);
            return false;
        }
    }


}