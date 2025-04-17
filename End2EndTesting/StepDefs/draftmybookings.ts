import { checkstatus } from '../Pages/checkstatus';
//const {status}=require('../Pages/status');
import ENV from '../EnvTest/env';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let draftmybookingsobj:checkstatus;

Given("navigate to the landing page",async()=>{
        await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
        await page.waitForLoadState('load');
        draftmybookingsobj = new checkstatus(page);
})

Then("filter the draft records",async function() {
    console.log("Filtering draft records");
    await draftmybookingsobj.draftmybookingsrec();
})

Then("verify draft records under my bookings",async function() {
    console.log('Verifying draft records');
    await draftmybookingsobj.verifyDraftmybookingsRecords();
    console.log("All status rows verified to be draft");
})
