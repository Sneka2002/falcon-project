import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let allrecords30obj:checkstatus;

Given("select all bookings for default 30", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    //await allrecords10obj.waitForTableToBeReady();
    await page.waitForLoadState('load');
    allrecords30obj = new checkstatus(page);
    await allrecords30obj.allbookingsrec30();
    await page.waitForLoadState('load');
});

Then("Get the pagination value as 30", async()=>{
    //await allrecords10obj.allbookingsrec10();
    // await allrecords10obj.waitForTableToBeReady();
    
    await allrecords30obj.drop();
});

Then("verify the page has only 30 records", async()=>{
    await allrecords30obj.verifyallRecords30();
    console.log("There are 30 records in a page");
    //await page.waitForLoadState('load');
});