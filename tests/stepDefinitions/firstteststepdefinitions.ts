import {Given, When, Then} from '@cucumber/cucumber';
import {Page, expect} from "@playwright/test";
import { CustomWorld } from '../support/world';
import {firsttestPobj} from '../../tests/pageObjects/firsttest-pobj';


Given('I Login to GH URL', async function(this: CustomWorld){

    const launchURL = new firsttestPobj(this.page);
    await launchURL.launchURL();

});

When('I Click on sign on button', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await firsttest.clicksignInLink();
});

When('I Enter {string} in username field', async function(this: CustomWorld, username: string){

    const firsttest = new firsttestPobj(this.page);
    await firsttest.Enterusername(username);

});

When('I Enter {string} in password field', async function(this: CustomWorld, password: string){

      
  const firsttest = new firsttestPobj(this.page);
    await firsttest.Enterpassword(password);

});

When('I Click on sign in button', async function(this: CustomWorld){

   const firsttest = new firsttestPobj(this.page);
    await firsttest.clickSigninBtn();

});

Then('I verify Error message is displayed', async function(this: CustomWorld){

    const firsttest = new firsttestPobj(this.page);
    await firsttest.verifyPopUpErrorMsg();

});




