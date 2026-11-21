import {Page, Locator, expect} from '@playwright/test';

export class firsttestPobj {

    readonly page:Page;

    readonly text = {
        pageHeading: "first test",
    }

    readonly locators:{
        signInLink: Locator;
        usernameTxtbox: Locator;
        passwordTxtbox: Locator;
        signInBtn: Locator;
        alertpopup: Locator;
    }
    //locators
    constructor(page: Page){
    this.page = page;
     this.locators = {
       signInLink: this.page.getByRole('link', { name: 'Sign in' }),
       usernameTxtbox: this.page.getByRole('textbox', { name: 'Username or email address' }),
       passwordTxtbox: this.page.getByRole('textbox', { name: 'Password' }),
       signInBtn: this.page.getByRole('button', { name: 'Sign in', exact: true }),
       alertpopup: this.page.getByRole('alert')
        };
    }

    //first part    

   //funtions/methods

    async launchURL(): Promise<void>{

        await this.page.goto("https://github.com/");

    }

    async clicksignin(): Promise<void>{

        await this.locators.signInLink.click();

    }

    async Username(username: string): Promise<void>{

        await this.locators.usernameTxtbox.fill(username);
    }

    async Enterpassword(password: string): Promise<void>{

        await this.locators.passwordTxtbox.fill(password);
    }

    async clicksigninbtn(): Promise<void>{

       await this.locators.signInBtn.click();
    }

    async verifyPopUpErrorMsg(): Promise<void>{

       await expect(this.locators.alertpopup).toContainText('Incorrect username or password.');
    }
}