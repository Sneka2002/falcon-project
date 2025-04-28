import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let allrecords10obj:checkstatus;

Given("select all bookings records", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    //await allrecords10obj.waitForTableToBeReady();
    await page.waitForLoadState('load');
    allrecords10obj = new checkstatus(page);
    await allrecords10obj.allbookingsrec10();
    await page.waitForLoadState('load');
});

Then("Get the pagination value", async()=>{
    //await allrecords10obj.allbookingsrec10();
    // await allrecords10obj.waitForTableToBeReady();
    
    await allrecords10obj.drop();
});

Then("verify the page has only 10 records", async()=>{
    await allrecords10obj.allRecords10();
    console.log("There are 10 records in a page");
    //await page.waitForLoadState('load');
});