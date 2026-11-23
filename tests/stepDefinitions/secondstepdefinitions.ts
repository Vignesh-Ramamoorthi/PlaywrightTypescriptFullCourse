import {Given, Then, When} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import {testPobj} from '../../tests/pageObjects/Test-pobj';


Given('I Login to Reqres URL', async function(this: CustomWorld){

    const launchURL = new testPobj(this.page);
    await launchURL.launchURL();

});

Then('I verify the Pricing link is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.pricingLink();

});

Then('I verify the Teams link is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.teamsLink();
});

Then('I verify the Blog link is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.blogLink();
});

Then('I verify the Docs link is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.docsLink();
});

Then('I verify the About link is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.aboutLink();


})



When('I click on get your free API button', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.clickGetYourFreeAPIKeyButton();

});


When('I Enter {string} in email field', async function(this: CustomWorld, Email: string){

    const testpobj = new testPobj(this.page);
    await testpobj.enteremailaddress(Email);

});



When('I click on {string} in password field', async function(this: CustomWorld, password: string){

      
  const testpobj = new testPobj(this.page);
    await testpobj.enterpasswordfield(password);

});

When('I click on continue button', async function(this: CustomWorld){
      
  const testpobj = new testPobj(this.page);
    await testpobj.clickcontinuebutton();

});


Then('I verify Error the message is displayed', async function(this: CustomWorld){

    const testpobj = new testPobj(this.page);
    await testpobj.verifypopuperrormsg();

})

