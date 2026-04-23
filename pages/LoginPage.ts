import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;

    //Locator
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly errorMsg :Locator;


    //constructor
    constructor(page: Page) {
        this.page = page;
        this.txtEmail = page.locator('#input-email');
        this.txtPassword = page.locator("#input-password");
        this.btnLogin = page.locator('input[value="Login"]');
        this.errorMsg= page.getByText('Warning: No match for E-Mail Address and/or Password.');
    }

    //Action Methods
    /**
         * Sets the email in the email field
         * @param email - email to enter
         */
    async setEmail(email :string):Promise<void>{
        await this.txtEmail.fill(email);
    }

    /**
         * Sets the password in the email field
         * @param password - password to enter
         */
    async setPassword(pass :string):Promise <void>{
        await this.txtPassword.fill(pass);
    }

    /**
         * clicks login
         */
    async clickLogin():Promise <void>{
        await this.btnLogin.click();
    }

    async getErrorMessage():Promise< any>{
        return (this.errorMsg.textContent());
    }
}