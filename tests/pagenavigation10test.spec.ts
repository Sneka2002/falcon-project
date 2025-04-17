import {test} from '@playwright/test'
import { checkstatus } from '../End2EndTesting/Pages/checkstatus';
import ENV from '../End2EndTesting/EnvTest/env';


test("all bookings 10", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const allrecords10obj= new checkstatus(page);

    
    await allrecords10obj.allbookingsrec10();
    await allrecords10obj.drop();
    await allrecords10obj.allRecords10();
    
    console.log("There are 10 records in a page");
    await page.waitForLoadState('load');
})
test("confirmed records under my bookings", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const confirm10mybookings= new checkstatus(page);

    
    await confirm10mybookings.confirmedmybookingsrec10();
    await confirm10mybookings.drop();
    await confirm10mybookings.verifyConfirmedRecords10();
    
    console.log("All status rows verified to be Confirmed under my bookings");
    await page.waitForLoadState('load');
})

test("draft records under all bookings", async({page})=>{


    await page.goto(ENV.URL_1);
    await page.waitForLoadState('load');
    const draft10allbookings= new checkstatus(page);

    await draft10allbookings.draftall();
    await draft10allbookings.allbookingsrec10();
    await draft10allbookings.drop();
    await draft10allbookings.verifydraftRecords10();
    
    console.log("All status rows verified to be draft");
    await page.waitForLoadState('load');
})

// test("my bookings records 10", async()=>{
//     const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
//     const page = await browser.newPage();
    
//     const loginpageobj= new LoginPage(page);
//     await loginpageobj.openapplication();
//     await loginpageobj.login("gs1-falcon","Welcome@123");
//     const mybookingsobj=new mybookingspage10(page);
//     await mybookingsobj.mybookingsrec();
//     await mybookingsobj.drop(); 
//     await mybookingsobj.mybookingsRecords10();


//     console.log("There are 10 records in a page under my bookings");

//     await page.waitForTimeout(8000);
// })
