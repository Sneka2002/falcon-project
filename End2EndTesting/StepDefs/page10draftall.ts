import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let draft10allbookings:checkstatus;

Given("filter 10 draft records under all bookings", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    draft10allbookings = new checkstatus(page);
    await draft10allbookings.draftall();
    await draft10allbookings.allbookingsrec10();
});

Then("verify the page has only 10 draft records",async()=>{

    await draft10allbookings.drop();
    await draft10allbookings.verifydraftRecords10();
    
    console.log("All status rows verified to be draft");
    await page.waitForLoadState('load');
});