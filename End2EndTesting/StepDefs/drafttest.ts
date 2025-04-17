//import { checkstatus } from '../Pages/checkstatus';
import ENV from '../EnvTest/env';
import { checkstatus } from '../Pages/checkstatus';
import { page } from './hooks';
import{Given,Then} from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000)
//const {status}=require('../Pages/status');
//const{checkstatus}=require('../Pages/checkstatus');
// const { Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// const { page } = require('./hooks');
// const ENV = require('../EnvTest/env');
//const { checkstatus } = require('../Pages/checkstatus');
//setDefaultTimeout(60 * 1000)

let draftallobj:checkstatus;

Given("navigate to expo-air website", async()=>{
    await page.goto(ENV.URL_1,{ waitUntil: 'networkidle' });
    await page.waitForLoadState('load');
    draftallobj = new checkstatus(page);
});

Then("I filter the draft records", async function () {
    console.log('Filtering draft records');
    await draftallobj.draftall();
});
Then("verify draft records", async function () {
    console.log('Verifying draft records');
    await draftallobj.verifyDraftallRecords();
    console.log("All status rows verified to be draft");
  });
