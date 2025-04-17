import { Browser,test} from '@playwright/test';
import { chromium } from "@playwright/test";
import ENV from '../EnvTest/env';

export async function login() {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
   //test("login", async()=>{
       //const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
       const page = await browser.newPage();
       await page.goto(ENV.URL);
       await page.locator("id=username").fill(ENV.USER_NAME);
       await page.locator("id=password").fill(ENV.PASSWORD);
       await page.locator("data-testid=login-button").click();
       await page.waitForURL("https://expo-air-dev-falcon.chq.ei:8443/air/booking/history");

       const storageState = await page.context().storageState();
       console.log('Storage state saved:', storageState);
       await browser.close();
       return storageState;
       //await page.context().storageState({path: './storagestate.json'});
   
       //await page.waitForTimeout(5000);
   }



