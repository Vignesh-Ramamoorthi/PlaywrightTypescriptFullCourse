import {Page, Locator, expect} from '@playwright/test';

export class testPobj {

    readonly page:Page;

    readonly text = {
        pageHeading: "first test",
    };
readonly locators: {
        pricingLink: Locator;
        teamsLink: Locator;
        blogLink: Locator;
        docsLink: Locator;
        aboutLink: Locator;
        getyourfreeAPIKeyButton: Locator;
        emailaddressfield: Locator;
        passwordfield: Locator;
        continueBtn: Locator;
        alertpopup: Locator;
    };

    // locators
    constructor(page: Page) {
        this.page = page;
        this.locators = {
            pricingLink:this.page.getByRole('link', { name: 'Pricing', exact: true }),
            teamsLink:this.page.getByRole('link', { name: 'Teams', exact: true }), 
            blogLink:this.page.getByRole('link', { name: 'Blog', exact: true }),
            docsLink:this.page.locator('a[href="/docs"]'),
            aboutLink:this.page.getByRole('link', { name: 'About',exact: true }),
            getyourfreeAPIKeyButton:this.page.getByRole('link', { name: 'Get your free API key' }),
            emailaddressfield:this.page.getByPlaceholder('Enter your email address'),
            passwordfield:this.page.getByPlaceholder('Enter your password'),
            continueBtn:this.page.getByRole('button', { name: 'Continue', exact: true }),
            alertpopup: this.page.getByTestId('form-feedback-error')    

        }
    }

    // functions/methods 2

    async launchURL(): Promise<void> {
        await this.page.goto('https://reqres.in/');
    }

   async pricingLink(): Promise<void> {
    await expect(this.locators.pricingLink).toBeVisible({timeout: 10000});
}

    async teamsLink(): Promise<void> {
        await expect(this.locators.teamsLink).toBeVisible({timeout: 10000}); 
        
    }

    async blogLink(): Promise<void> {
        await expect(this.locators.blogLink).toBeVisible({timeout: 10000});
    }

    async docsLink(): Promise<void> {
        await expect(this.locators.docsLink.nth(0)).toBeVisible({timeout: 10000});
        
    }

    async aboutLink(): Promise<void> {
        await expect(this.locators.aboutLink).toBeVisible({timeout: 10000});
    }


    async clickGetYourFreeAPIKeyButton(): Promise<void> {
        await this.locators.getyourfreeAPIKeyButton.nth(0).click();

    }

    async enteremailaddress(username: string): Promise<void> {
        await this.locators.emailaddressfield.fill(username);

    }

    async enterpasswordfield(password: string): Promise<void> {
        await this.locators.passwordfield.fill(password);

    }
    
    async clickcontinuebutton(): Promise<void> {
        await this.locators.continueBtn.click();

    }

    async verifypopuperrormsg(): Promise<void> {
        await expect (this.locators.alertpopup).toContainText("Your password must contain 8 or more characters.");
    }

    }


    
    


