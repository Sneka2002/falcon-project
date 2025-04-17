import { checkstatus } from '../Pages/checkstatus';
//const{checkstatus}=require('../Pages/checkstatus');
import ENV from '../EnvTest/env';
import{Given,Then} from '@cucumber/cucumber';
import { page } from './hooks';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let confirmedmyobj:checkstatus;

Given("I navigate to the landing page", async()=>{

    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    confirmedmyobj = new checkstatus(page);
    //await page.waitForNavigation({ waitUntil: 'networkidle' });
});

Then("I filter the confirmed records under my bookings", async function () {
    console.log('Filtering confirmed records');
    await confirmedmyobj.confirmedmybookingsrec();
  });
Then("verify confirmed records under my bookings", async function () {
    await confirmedmyobj.verifyConfirmedmybookingsRecords();
    console.log('verified confirmed records under my bookings');
  });