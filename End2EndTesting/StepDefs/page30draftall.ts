import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let allrecords30obj:checkstatus;

Given("filter 30 draft records under all bookings", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    allrecords30obj = new checkstatus(page);
    await allrecords30obj.allbookingsrec30();
    //await draft20allbookingsobj.allbookingsrec10();
});

Then("verify the page has only 30 draft records",async()=>{

    await allrecords30obj.drop();
    await allrecords30obj.verifyallRecords30();
    
    console.log("All status rows verified to be draft");
    await page.waitForLoadState('load');
});