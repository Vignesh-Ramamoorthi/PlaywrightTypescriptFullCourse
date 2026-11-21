import {Given, When, Then} from '@cucumber/cucumber';
import {Page, expect} from "@playwright/test";
import { CustomWorld } from '../support/world';
import {firsttestPobj} from '../../tests/pageObjects/firsttest-pobj';


Given('I Login to Reqres URL', async function(this: CustomWorld){

    const launchURL = new firsttestPobj(this.page);
    await launchURL.launchURL();

});

When('I Click on pricing link', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await this.page.getByRole('link', { name: 'Pricing' }).click();

});

When('I Click on Teams link', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await this.page.getByRole('link', { name: 'Teams' }).click();

});


When('I Click on Blog link', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await this.page.getByRole('link', { name: 'Blog' }).click();

});


When('I Click on Docs link', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await this.page.getByRole('link', { name: 'Docs' }).click();

});


When('I Click on About link', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await this.page.getByRole('link', { name: 'About' }).click();

});

Given('I Login to Reqres URL', async function(this: CustomWorld){

    const launchURL = new firsttestPobj(this.page);
    await launchURL.launchURL();

});

When('I Click on Getyourfreeapikey', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await firsttest.clicksignin();
});


When('I Enter {string} in emailaddress field', async function(this: CustomWorld, username: string){


     const firsttest = new firsttestPobj(this.page);
     await this.page.getByRole('textbox', { name: 'Email address' }).fill(username);

});

When('I Enter {string} in password field', async function(this: CustomWorld, password: string){

      
  const firsttest = new firsttestPobj(this.page);
    await firsttest.Enterpassword(password);

});

When('I Click on continue button', async function(this: CustomWorld){

     const firsttest = new firsttestPobj(this.page);
     await this.page.getByRole('button', { name: 'Continue' }).click();

});

Then('I verify Error message is displayed', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await firsttest.verifyPopUpErrorMsg();

});




