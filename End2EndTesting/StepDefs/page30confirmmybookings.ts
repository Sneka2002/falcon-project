import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let confirmed30mybookings:checkstatus;

Given("filter the 30 confirmed records under my bookings",async()=>{
        await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
        await page.waitForLoadState('load');
        confirmed30mybookings = new checkstatus(page);
        await confirmed30mybookings.confirmedmybookingsrec();
        await confirmed30mybookings.allbookingsrec30();
});

Then("verify the page has only 30 confirmed records", async()=>{
    await confirmed30mybookings.drop();
    await confirmed30mybookings.verifyConfirmedRecords30();
    
    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
});
