import {test} from '@playwright/test'
import { checkstatus } from '../End2EndTesting/Pages/checkstatus';
import ENV from '../End2EndTesting/EnvTest/env';

test("confirmed records under my bookings", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const confirmed20mybookings= new checkstatus(page);

    await confirmed20mybookings.drop();
    await confirmed20mybookings.confirmedmybookingsrec();
    await confirmed20mybookings.verifyConfirmedRecords20();

    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
})

test("all bookings records", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const allrecords20obj= new checkstatus(page);

    await allrecords20obj.drop();
    await allrecords20obj.AllRecords20();

    console.log("There are 20 records in a page");
    await page.waitForLoadState('load');
})

test("draft records under all bookings", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const draft20allbookingsobj= new checkstatus(page);

    await draft20allbookingsobj.draftall();
    await draft20allbookingsobj.drop();
    await draft20allbookingsobj.verifydraftRecords20();

    console.log("All status rows verified to be draft records");
    await page.waitForLoadState('load');
})

// test("My bookings records", async()=>{
//     const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
//     const page = await browser.newPage();
    
//     const loginpageobj= new LoginPage(page);
//     await loginpageobj.openapplication();
//     await loginpageobj.login("gs1-falcon","Welcome@123");
//     const mybookingsobj=new mybookingspage20(page);
//     await mybookingsobj.mybookingsrec();
//     await mybookingsobj.drop();
//     await mybookingsobj.mybookingsRecords20();


//     console.log("There are 20 records in a page under my bookings");

//     await page.waitForLoadState('load');
// })