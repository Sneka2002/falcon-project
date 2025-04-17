//import { checkstatus } from '../Pages/checkstatus';
//const{checkstatus}=require('../Pages/checkstatus');
import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let reloadobj:checkstatus;

Given("navigate to expo-air landing page", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    reloadobj = new checkstatus(page);
});

Then("want to filter confirmed my bookings records", async function() {
    console.log("filtering confirmed my bookings record");
    await reloadobj.confirmedmybookingsrec();
});

Then("verify the confirmed my booking records",async function() {
    console.log("verify the confirmed records under my bookings");
    await reloadobj.verifyConfirmedmybookingsRecords();
});

Then("reload the page", async function() {
    console.log("reload the page");
    await page.reload();
});

Then("after reload",async function() {
    console.log("After reload the page");
    await reloadobj.afterReload();
    await page.waitForLoadState('load');
})