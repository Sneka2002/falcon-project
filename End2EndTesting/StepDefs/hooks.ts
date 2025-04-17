import { BeforeAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { login } from '../Pages/login';

let browser: Browser;
let page: Page;
let storageState: any;

BeforeAll(async () => {
  console.log('BeforeAll hook executed');
  if (!storageState) {
    console.log('Performing login');
    storageState = await login();
  }
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ storageState });
  page = await context.newPage();
  console.log('Browser and page initialized');
});

export { page };


// const { BeforeAll } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');
// const { login } = require('../Pages/login');

// let browser;
// let page;
// let storageState;

// BeforeAll(async () => {
//   console.log('BeforeAll hook executed');
  
//   if (!storageState) {
//     console.log('Performing login');
//     storageState = await login();
//   }

//   browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext({ storageState });
//   page = await context.newPage();
//   console.log('Browser and page initialized');
// });

// module.exports = { page };
