import {Page, Locator, expect} from '@playwright/test';

export class test2Pobj {

    readonly page: Page;

    readonly text = {
        pageHeading: "third test",
    };

    readonly locators: {
        firstnamefield: Locator;
        lastnamefield: Locator;
        emailaddressfield: Locator;
        genderfield: Locator;
        mobilenumberfield: Locator;
        dateofbirthfield: Locator;
        subjectfield: Locator;
        sportscheckbox: Locator;
        readingcheckbox: Locator;
        uploadpicture: Locator;
        currentaddress: Locator;
        statefield: Locator;
        cityfield: Locator;
        submitbutton: Locator;
        verifyThanksforsubmittingtheformisdisplayed: Locator

    };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            firstnamefield: this.page.locator('#firstName'),
            lastnamefield: this.page.locator('#lastName'),
            emailaddressfield: this.page.locator('#userEmail'),
            genderfield: this.page.locator('#gender-radio-1'),
            mobilenumberfield: this.page.locator('#userNumber'),
            dateofbirthfield: this.page.locator('#dateOfBirthInput'),
            subjectfield: this.page.locator('#subjectsInput'),
            sportscheckbox: this.page.locator('label[for="hobbies-checkbox-1"]'),
            readingcheckbox: this.page.locator('label[for="hobbies-checkbox-2"]'),
            uploadpicture: this.page.locator('#uploadPicture'),
            currentaddress: this.page.locator('#currentAddress'),
            statefield: this.page.locator('#react-select-3-input'),
            cityfield: this.page.locator('#react-select-4-input'),
            submitbutton: this.page.locator('#submit'),
            verifyThanksforsubmittingtheformisdisplayed: this.page.getByText('Thanks for submitting the form', { exact: true })
        }
    
    
    }
            




        async launchURL(): Promise<void> {
               await this.page.goto('https://demoqa.com/automation-practice-form');
               await this.page.waitForTimeout(5000);

        }

        async enterfirstname(firstname: string): Promise<void> {
               await this.locators.firstnamefield.fill(firstname);
               await this.page.waitForTimeout(5000);
              
        }

        async enterlastname(lastname: string): Promise<void> {
               await this.locators.lastnamefield.fill(lastname);
               await this.page.waitForTimeout(5000);
               
        }

        async enteremailaddress(email: string): Promise<void> {
               await this.locators.emailaddressfield.fill(email);
               await this.page.waitForTimeout(5000);

        }

        async selectmalegender() {
               await this.locators.genderfield.check();
               await this.page.waitForTimeout(5000);

        }

        async entermobilenumber(mobile: string): Promise<void> {
               await this.locators.mobilenumberfield.fill(mobile);
               await this.page.waitForTimeout(5000);

            
        }

        async enterdateofbirth(dateofbirth: string): Promise<void> {
              await this.locators.dateofbirthfield.fill(dateofbirth);
              await this.locators.dateofbirthfield.press('Enter');
              await this.page.waitForTimeout(5000);

        }

        async entersubject(subject: string): Promise<void> {
              await this.locators.subjectfield.fill(subject);
              await this.locators.subjectfield.press('Enter');
              await this.page.waitForTimeout(5000);
        }

        async clicksportsandreadingcheckbox(): Promise<void> {
             await this.locators.sportscheckbox.click();
             await this.locators.readingcheckbox.click();
             await this.page.waitForTimeout(5000);

        }

        async uploadpicture(): Promise<void> {
            const fileInput = this.locators.uploadpicture;
            await fileInput.setInputFiles('tests/testdata/test.png');
            await this.page.waitForTimeout(5000);
        }
        
        async entercurrentaddress(currentAddress: string): Promise<void> {
            await this.locators.currentaddress.fill(currentAddress);
            await this.page.waitForTimeout(5000);
        }

        async selectstatename(state: string): Promise<void> {
            await this.locators.statefield.fill(state);
            await this.locators.statefield.press('Enter');
            await this.page.waitForTimeout(5000);
       
        }

        
        
        async selectcityname(city: string): Promise<void> {
            await this.locators.cityfield.fill(city);
            await this.locators.cityfield.press('Enter');
            await this.page.waitForTimeout(5000);
        }

        async clicksubmitbuttton(): Promise<void> {
            await this.locators.submitbutton.click();
            await this.page.waitForTimeout(5000);
        }

        async verifyThanksforsubmittingtheformisdisplayed(): Promise<void>{
        await expect(this.locators.verifyThanksforsubmittingtheformisdisplayed).toBeVisible();
        }


}
