
import { Before, After, setDefaultTimeout} from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
setDefaultTimeout(30000);

Before({ timeout: 30000 }, async function (this: CustomWorld) {

  this.browser = await chromium.launch({
    channel: 'chrome',
    headless: false

  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

});

After({ timeout: 30000 }, async function (this: CustomWorld) {

  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();

});
