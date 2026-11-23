import {Given, When,Then} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import {testPobj} from '../../tests/pageObjects/Test-pobj';
import {test2Pobj} from'../../tests/pageObjects/Test2-pobj';

Given('I Login to demoqa URL', async function(this: CustomWorld){
    const us2057 = new test2Pobj(this.page);
    await us2057.launchURL();

    

});

When('I enter {string} in first name field', async function(this: CustomWorld, name: string) {
     const us2057 = new test2Pobj(this.page);
     await us2057.enterfirstname(name);


});

When('I enter {string} in last name field', async function(this: CustomWorld, lastname: string) {
    const us2057 = new test2Pobj(this.page);
    await us2057.enterlastname(lastname);
    

});

When('I enter {string} in email field', async function(this: CustomWorld, Email: string) {
    const us2057 = new test2Pobj(this.page);
    await us2057.enteremailaddress(Email);


});

When('I select gender radio button in gender field', async function(this: CustomWorld){
     const us2057 = new test2Pobj(this.page);
     await us2057.selectmalegender();
    
  

});

When('I enter {string} in mobile field', async function(this: CustomWorld, mobile: string){
     const us2057 = new test2Pobj(this.page);
     await us2057.entermobilenumber(mobile);


});

When('I enter {string} and select in dob field', async function (this: CustomWorld, dateofbirth: string) {
    const us2057 = new test2Pobj(this.page);
    await us2057.enterdateofbirth(dateofbirth);
  
   
});


When('I enter {string} and select in subject field', async function (this: CustomWorld, subject: string) {
     const us2057 = new test2Pobj(this.page);
     await us2057.entersubject(subject);

});


 When('I select sports and reading checkbox', async function (this: CustomWorld) {
     const us2057 = new test2Pobj(this.page);
     await us2057.clicksportsandreadingcheckbox();

});

When ('I upload a picture in picture field',async function (this:CustomWorld){
     const us2057 = new test2Pobj(this.page);
     await us2057.uploadpicture();
 

    
});

When('I enter {string} in address field', async function (this:CustomWorld, currentaddress: string) {
     const us2057 = new test2Pobj(this.page);
     await us2057.entercurrentaddress(currentaddress);
  


});

When('I select {string} from state dropdown field', async function (this:CustomWorld, state: string){
     const us2057 = new test2Pobj(this.page);
     await us2057.selectstatename(state);
     
});

When('I select {string} from city dropdown field', async function (this:CustomWorld, city: string){
     const us2057 = new test2Pobj(this.page);
     await us2057.selectcityname(city);
    

});

When ('I click on submit button', async function (this:CustomWorld){
     const us2057 = new test2Pobj(this.page);
     await us2057.clicksubmitbuttton();
   
    
});


Then('I verify Thanks for submitting the form is displayed', async function(this: CustomWorld){
     const us2057 = new test2Pobj(this.page);
     await us2057.verifyThanksforsubmittingtheformisdisplayed();
    
})



