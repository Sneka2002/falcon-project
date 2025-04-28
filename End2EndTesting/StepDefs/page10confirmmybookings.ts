import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let confirm10mybookings:checkstatus;

Given("filter the confirmed records under my bookings",async()=>{
        await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
        await page.waitForLoadState('load');
        confirm10mybookings = new checkstatus(page);
        await confirm10mybookings.confirmedmybookingsrec10();
});

Then("verify the page has only 10 confirmed records", async()=>{
    await confirm10mybookings.drop();
    await confirm10mybookings.verifyConfirmedRecords10();
    
    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
});
