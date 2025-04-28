import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let draft20allbookingsobj:checkstatus;

Given("filter 20 draft records under all bookings", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    draft20allbookingsobj = new checkstatus(page);
    await draft20allbookingsobj.draftall();
    //await draft20allbookingsobj.allbookingsrec10();
});

Then("verify the page has only 20 draft records",async()=>{

    await draft20allbookingsobj.drop();
    await draft20allbookingsobj.verifydraftRecords20();
    
    console.log("All status rows verified to be draft");
    await page.waitForLoadState('load');
});