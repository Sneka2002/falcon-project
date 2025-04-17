import {test} from '@playwright/test'
import { checkstatus } from '../End2EndTesting/Pages/checkstatus';
import ENV from '../End2EndTesting/EnvTest/env';

test("confirmed records under my bookings", async({page})=>{

    
    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const confirmed30mybookings= new checkstatus(page);


    await confirmed30mybookings.confirmedmybookingsrec();
    await confirmed30mybookings.allbookingsrec30();
    await confirmed30mybookings.drop();
    await confirmed30mybookings.verifyConfirmedRecords30();
    
    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
})

test("All bookings records", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const allrecords30obj= new checkstatus(page);

    
    await allrecords30obj.allbookingsrec30();
    await allrecords30obj.drop();
    await allrecords30obj.verifyallRecords30();
    
    console.log("There are 30 records in a page");
    await page.waitForLoadState('load');
})

test("draft records under all bookings", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const draft30allbookings= new checkstatus(page);

    await draft30allbookings.draftall();
    await draft30allbookings.allbookingsrec30();
    await draft30allbookings.drop();
    await draft30allbookings.verifydraftRecords30();
    
    console.log("All status rows verified to be draft");
    await page.waitForLoadState('load');
})

// test("My bookings records", async()=>{
//     const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
//     const page = await browser.newPage();
    
//     const loginpageobj= new LoginPage(page);
//     await loginpageobj.openapplication();
//     await loginpageobj.login("gs1-falcon","Welcome@123");
//     const mybookingsobj=new mybookingspage30(page);
//     await mybookingsobj.mybookingsrec();
//     await mybookingsobj.drop();
//     await mybookingsobj.verifyRecords30();


//     console.log("There are 30 records in a page under my bookings");

//     await page.waitForLoadState('load');
// })