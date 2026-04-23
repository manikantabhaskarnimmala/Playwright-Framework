import {Page, Locator} from "@playwright/test";

export class HomePage {
    private readonly page:Page;
    //locators
    private readonly lnkMyAccount:Locator ;
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    //constructors
    constructor(page:Page){
        this.page =page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.getByRole('link', {name:'Register', exact:true});
        this.lnkLogin = page.getByRole('link', {name:'Login', exact:true});
        this.txtSearchbox =page.getByRole('textbox', {name:'search', exact:true});
        this.btnSearch=page.locator("div#search button[type='button']");
    }

    //action methods

    //checking if homepage exists
    async isHomePageExist():Promise<boolean>{
        const title:string =await this.page.title();

        if(title){
            return true;
        }
        return false;
    }

    //clicking My Account link
    async clickMyAccount():Promise<void>{
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception occured while clicking my account link :${error}`);
            throw error;
        }
    }

    //click login link
    async clickLogin():Promise<void>{
        try{
            await this.lnkLogin.click();
        }catch(error){
            console.log(`Exception occured while clicking my login link :${error}`);
            throw error;
        }
    }

    //click Register link
    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }
        catch(error){
            console.log(`Exception occured while clicking my Register link :${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }

}