import {Page, Locator, expect} from '@playwright/test';

export class firsttestPobj {

    readonly page:Page;

    readonly text = {
        pageHeading: "first test",
    }

    readonly locators: {
        signInLink: Locator;
        usernameTxtbox: Locator;
        passwordTxtbox: Locator;
        signInBtn: Locator;
        alertpopup: Locator;
        pricingLink: Locator;
        teamsLink: Locator;
        blogLink: Locator;
        docsLink: Locator;
        aboutLink: Locator;
    };

    // locators
    constructor(page: Page) {
        this.page = page;
        this.locators = {
            signInLink: this.page.getByRole('link', { name: 'Sign in' }),
            usernameTxtbox: this.page.getByRole('textbox', { name: 'Username or email address' }),
            passwordTxtbox: this.page.getByRole('textbox', { name: 'Password' }),
            signInBtn: this.page.getByRole('button', { name: 'Sign in', exact: true }),
            alertpopup: this.page.getByRole('alert'),
            pricingLink: this.page.getByRole('link', { name: 'Pricing' }),
            teamsLink: this.page.getByRole('link', { name: 'Teams' }),
            blogLink: this.page.getByRole('link', { name: 'Blog' }),
            docsLink: this.page.getByRole('link', { name: 'Docs' }),
            aboutLink: this.page.getByRole('link', { name: 'About' }),
        };
    }

    // functions/methods

    async launchURL(): Promise<void> {
        await this.page.goto('https://reqres.in/');
    }

    async pricingLink(): Promise<void> {
        await this.locators.pricingLink.click();
    }

    async TeamsLink(): Promise<void> {
        await this.locators.teamsLink.click();
    }

    async BlogLink(): Promise<void> {
        await this.locators.blogLink.click();
    }

    async DocsLink(): Promise<void> {
        await this.locators.docsLink.click();
    }

    async AboutLink(): Promise<void> {
        await this.locators.aboutLink.click();
    }

    async Getyourfreeapikey(): Promise<void> {
        await this.locators.signInLink.click();
    }

    async Emailaddress(username: string): Promise<void> {
        await this.locators.usernameTxtbox.fill(username);
    }

    async Enterpassword(password: string): Promise<void> {
        await this.locators.passwordTxtbox.fill(password);
    }

    async continueBtn(): Promise<void> {
        await this.locators.signInBtn.click();
    }

    async verifyPopUpErrorMsg(): Promise<void> {
        await expect(this.locators.alertpopup).toContainText('Incorrect username or password.');
    }
}