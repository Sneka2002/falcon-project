import { checkstatus } from '../Pages/checkstatus';
//const{checkstatus}=require('../Pages/checkstatus');
import ENV from '../EnvTest/env';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)

let confirmedallobj:checkstatus;

Given("I navigate to expo-air website", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    confirmedallobj = new checkstatus(page);
    //await page.waitForNavigation({ waitUntil: 'networkidle' });
});

Then("I filter the confirmed records", async function () {
    console.log('Filtering confirmed records');
    confirmedallobj=new checkstatus(page);
    await confirmedallobj.confirmedall();
});
  
Then("verify the confirmed records", async function () {
    console.log('Verifying confirmed records');
    await confirmedallobj.verifyconfirmedRecords();
    console.log("All status rows verified to be Confirmed");
  });