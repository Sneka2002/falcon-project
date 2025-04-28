import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let allrecords20obj:checkstatus;

Given("login to expo landing page", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    //await allrecords10obj.waitForTableToBeReady();
    await page.waitForLoadState('load');
    allrecords20obj = new checkstatus(page);
    //await allrecords20obj.allbookingsrec20();
    //await page.waitForLoadState('load');
});

Then("Get the pagination value as 20", async()=>{
    //await allrecords10obj.allbookingsrec10();
    // await allrecords10obj.waitForTableToBeReady();
    
    await allrecords20obj.drop();
});

Then("verify the page has only 20 records", async()=>{
    await allrecords20obj.AllRecords20();
    console.log("There are 20 records in a page");
    //await page.waitForLoadState('load');
});