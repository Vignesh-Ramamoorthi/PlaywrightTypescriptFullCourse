import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Invalid Credentials_TC01', async ({ page }) => {
  
  //Step:1 login to GH URL

  await page.goto('https://github.com/');

  //Step 2:	Click on sign on button

  


  //Step 3.	Enter username in username field

  //step 4:	Enter password in password field

  //step 5:	Click on sign in button

  //step 6.	Verify Error message is displayed

});

test('Valid Credentials_TC02', async ({ page }) => {
  



});


test('Car Insurance_New business policy creation', async ({ page }) => {
  
  //policy info

  //vehicle screen

  //coverage screen

  //risk analysis

  //quote screen

  //bind screen

  
});

test('Home insurnace new business policy creation', async ({ page }) => {
  


  
});

test('Landlord insurance new business policy creation', async ({ page }) => {
  


  
});