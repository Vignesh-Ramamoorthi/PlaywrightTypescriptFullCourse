import { test, expect } from '@playwright/test';

test('github test run_TC01 ', async ({ page }) => {
   //Step:1 Launch the GH URL
  await page.goto('https://github.com/');

  //Step 2:	Click on sign on button
  await page.getByRole('link', { name: 'Sign in' }).click();

  //Step 3.	Enter username in username field
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Sridevi');
  await page.getByRole('textbox', { name: 'Password' }).click();

  //step 4:	Enter password in password field
  await page.getByRole('textbox', { name: 'Password' }).fill('sridevi');

   //step 5:	Click on sign in button
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

   //step 6.	Verify Error message is displayed
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});

test('github test run_TC02 ', async ({ page }) => {
   //Step:1 Launch the GH URL
  await page.goto('https://github.com/');

  //Step 2:	Click on sign on button
  await page.getByRole('link', { name: 'Sign in' }).click();

  //Step 3.	Enter username in username field
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Sridevi');
  await page.getByRole('textbox', { name: 'Password' }).click();

});

test('github test run_TC03 ', async ({ page }) => {
   //Step:1 Launch the GH URL
  await page.goto('https://github.com/');

  //Step 2:	Click on sign on button
  await page.getByRole('link', { name: 'Sign in' }).click();

  //Step 3.	Enter username in username field
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Sridevi');
  await page.getByRole('textbox', { name: 'Password' }).click();

  //step 4:	Enter password in password field
  await page.getByRole('textbox', { name: 'Password' }).fill('sridevi');

   //step 5:	Click on sign in button
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

   //step 6.	Verify Error message is displayed
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

   //step 5:	Click on sign in button
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

   //step 6.	Verify Error message is displayed
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});

test('github test run_TC04 ', async ({ page }) => {
   //Step:1 Launch the GH URL
  await page.goto('https://github.com/');

  //Step 2:	Click on sign on button
  await page.getByRole('link', { name: 'Sign in' }).click();
});
