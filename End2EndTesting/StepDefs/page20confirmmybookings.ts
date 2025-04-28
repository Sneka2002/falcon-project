import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let confirmed20mybookings:checkstatus;

Given("filter the 20 confirmed records under my bookings",async()=>{
        await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
        await page.waitForLoadState('load');
        confirmed20mybookings = new checkstatus(page);
        await confirmed20mybookings.confirmedmybookingsrec();
});

Then("verify the page has only 20 confirmed records", async()=>{
    await confirmed20mybookings.drop();
    await confirmed20mybookings.verifyConfirmedRecords20();
    
    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
});
