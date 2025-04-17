import { expect, Locator} from '@playwright/test';
import ENV from '../EnvTest/env';
export class status {
  constructor(page) {
  this.page=page;
  this.Usernametextbox = this.page.locator("#username");
  this.Passwordtextbox = this.page.locator("#password");
  this.Loginbutton = this.page.locator("[data-testid=login-button]");
  this.dropdown1 = this.page.locator('//p-dropdown[@styleclass="body-1-regular"]/div[1]/span');
  this.mybookings = this.page.locator('//div[@class="p-dropdown-items-wrapper"]/ul/p-dropdownitem[2][@class="p-element ng-star-inserted"]//span[@class="ng-star-inserted"]');
  this.search = this.page.locator('//header[@class="f-table-head-section"]/div[2]/span/input');
  this.dropdown2 = this.page.locator('//p-dropdown[@styleclass="p-paginator-rpp-options"]/div');
  this.select = this.page.locator('//div[@class="p-dropdown-items-wrapper"]/ul/p-dropdownitem[1][@class="p-element ng-star-inserted"]/li/span[@class="ng-star-inserted"]');
  this.select30 = this.page.locator('//div[@class="p-dropdown-items-wrapper"]/ul/p-dropdownitem[3][@class="p-element ng-star-inserted"]/li/span[@class="ng-star-inserted"]');
  this.textvalue = this.page.locator('//div[@class="p-paginator-rpp-options p-dropdown p-component p-inputwrapper p-inputwrapper-filled"]/span[@class="p-element p-dropdown-label p-inputtext ng-star-inserted"]');
  this.status1 = this.page.locator('[data-testid="td-status"]>div>i~span');
  this.status2 = this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)');
  }
  async openapplication()
  {
      await this.page.goto(ENV.URL);
  }

  async login()
  {
      await this.Usernametextbox.fill(ENV.USER_NAME);
      await this.Passwordtextbox.fill(ENV.PASSWORD);
      await this.Loginbutton.click();
  }
  async draftall()
  {
      await this.search.pressSequentially("Draft",{delay:1000});
  }
  async verifyDraftallRecords() 
  {
      await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { state: 'attached', timeout: 10000 }).catch(() => console.log("Last modified elements not found"));
      const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
      console.log(resultCount.length);
      for (let i = 0; i < resultCount.length; i++) {
          const resultText = await resultCount[i].textContent();
          //console.log(resultText);
          expect(resultText?.trim()).toBe(ENV.STATUS1);
      }
  }
  async draftmybookingsrec()
  {
      await this.dropdown1.click();
      await this.mybookings.click();
      await this.search.pressSequentially("Draft",{delay:1000});
  }
  async verifyDraftmybookingsRecords() {

      await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { state: 'attached', timeout: 10000 }).catch(() => console.log("Status elements not found"));
      await this.page.waitForSelector('[data-testid="td-last-modified"]>div>span:nth-of-type(2)', { state: 'attached', timeout: 10000 }).catch(() => console.log("Last modified elements not found"));
      const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
      const bookingsCount = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').all();


      console.log("Result Count Length:", resultCount.length);
      console.log("Bookings Count Length:", bookingsCount.length);

      if (resultCount === bookingsCount) {
          console.log("All are equal");
      }
      for (let i = 0; i < resultCount.length; i++) {
          const resultText = await resultCount[i].textContent();
          const bookingsText = await bookingsCount[i].textContent();
          console.log(bookingsText);
          expect(resultText?.trim()).toBe(ENV.STATUS1);
          expect(bookingsText?.trim()).toBe(ENV.STATUS3);
          
      }
  }
  async confirmedall()
  {
      await this.search.pressSequentially("Confirmed",{delay:1000});
  }
  async verifyconfirmedRecords() {
      await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { state: 'attached', timeout: 10000 }).catch(() => console.log("Last modified elements not found"));
      const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
      console.log(resultCount.length);
      for (let i = 0; i < resultCount.length; i++) {
          const resultText = await resultCount[i].textContent();
          expect(resultText?.trim()).toBe(ENV.STATUS2);
      }
  }

  async confirmedmybookingsrec()
  {
      await this.dropdown1.waitFor({ state:'visible',timeout: 60000 });
      await this.dropdown1.click();
      await this.mybookings.waitFor({state:'visible',timeout:60000});
      await this.mybookings.click();
      await this.search.pressSequentially("Confirmed",{delay:1000});
  }
  async verifyConfirmedmybookingsRecords() {
      await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { state: 'attached', timeout: 10000 }).catch(() => console.log("Status elements not found"));
      await this.page.waitForSelector('[data-testid="td-last-modified"]>div>span:nth-of-type(2)', { state: 'attached', timeout: 10000 }).catch(() => console.log("Last modified elements not found"));
      const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
      const bookingsCount = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').all();
      console.log(resultCount.length);
      console.log(resultCount.length);
      if (resultCount.length === bookingsCount.length) {
          console.log("All are equal");
      }
      for (let i = 0; i < resultCount.length; i++) {
          for(let j=0;j<bookingsCount.length;j++){
          const resultText = await resultCount[i].textContent();
          const bookingsText = await bookingsCount[i].textContent();
          expect(resultText?.trim()).toContain(ENV.STATUS2);
          expect(bookingsText?.trim()).toContain(ENV.STATUS3);
      }
  }
  }
  async afterReload() {
      const searchValue = await this.search.inputValue();
     
      console.log(`Search input value: "${searchValue}"`);
     
      expect(searchValue).toBe("");
      console.log('Search input is empty as expected');
     
      const dropdownText = await this.dropdown1.textContent();
     
      console.log(`Dropdown text: "${dropdownText?.trim()}"`);
     
      expect(dropdownText?.trim()).toBe("All Bookings");
      console.log('Dropdown is set to "All Bookings" as expected');
  }
  async allbookingsrec10() {
      console.log("before click");
      await this.dropdown2.click();
      console.log("after click");
      console.log("before click");
      await this.select.click();
      console.log("after click"); 
  
  }
  async drop() {
      const num=await this.textvalue.textContent();
      //const num = await this.page.locator('//div[@class="p-paginator-rpp-options p-dropdown p-component p-inputwrapper p-inputwrapper-filled"]/span[@class="p-element p-dropdown-label p-inputtext ng-star-inserted"]').textContent();
      console.log(num);
  }
  async allRecords10() {
      await this.page.waitForLoadState('networkidle');

  // Wait for the dropdown to be visible before proceeding
  await this.textvalue.waitFor({ state: 'visible', timeout: 5000 });

  await this.page.waitForSelector('//p-dropdown[@styleclass="p-paginator-rpp-options"]/div', { timeout: 10000 });

  // Capture and parse the records per page
  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

  const pageResultCount = resultCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);

  for (let i = 0; i < recordsPerPage; i++) {
      const result = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();
      console.log(result);
  }
}
async confirmedmybookingsrec10() {
  await this.dropdown1.click();
  await this.mybookings.click();
  await this.search.pressSequentially("Confirmed", { delay: 1000 });
  console.log("before click");
  await this.dropdown2.click();
  console.log("after click");
  console.log("before click");
  await this.select.click();
  console.log("after click");

}
async verifyConfirmedRecords10() {
  await this.page.waitForLoadState('networkidle');

// Wait for the dropdown to be visible before proceeding
await this.textvalue.waitFor({ state: 'visible', timeout: 5000 });

// Add longer timeout for dynamic content
await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { timeout: 10000 });
await this.page.waitForSelector('[data-testid="td-last-modified"]>div>span:nth-of-type(2)', { timeout: 10000 });

// Wait for paginator to be visible
await this.page.waitForSelector('//p-dropdown[@styleclass="p-paginator-rpp-options"]/div', { timeout: 10000 });

// Capture and parse the records per page
const recordsPerPageText = await this.textvalue.textContent();
const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

// Wait for result elements to be visible
await this.status1.first().waitFor({ state: 'visible', timeout: 10000 });
await this.status2.first().waitFor({ state: 'visible', timeout: 10000 });

const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
const bookingsCount = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').all();

const pageResultCount = resultCount.slice(0, recordsPerPage);
const pageBookingsCount = bookingsCount.slice(0, recordsPerPage);

expect(pageResultCount.length).toBe(recordsPerPage);
expect(pageBookingsCount.length).toBe(recordsPerPage);

for (let i = 0; i < recordsPerPage; i++) {
  const resultText = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();
  const bookingsText = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').nth(i).textContent();

  expect(resultText?.trim()).toContain(ENV.STATUS2);
  expect(bookingsText?.trim()).toBe(ENV.STATUS3);
}

}
async verifydraftRecords10() {
  await this.page.waitForLoadState('networkidle');

// Wait for the dropdown to be visible before proceeding
await this.textvalue.waitFor({ state: 'visible', timeout: 5000 });

await this.page.waitForSelector('[data-testid="td-status"]>div>i~span', { timeout: 10000 });

await this.page.waitForSelector('//p-dropdown[@styleclass="p-paginator-rpp-options"]/div', { timeout: 10000 });

// Capture and parse the records per page
const recordsPerPageText = await this.textvalue.textContent();
const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

// Wait for result elements to be visible
await this.status1.first().waitFor({ state: 'visible', timeout: 10000 });

const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

const pageResultCount = resultCount.slice(0, recordsPerPage);

expect(pageResultCount.length).toBe(recordsPerPage);

for (let i = 0; i < recordsPerPage; i++) {
  const resultText = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();

  expect(resultText?.trim()).toContain(ENV.STATUS1);
}

}
async AllRecords20() {

  await this.page.waitForSelector('[data-testid="td-status"]>div>i~span');
  await this.page.waitForSelector('//div[@class="p-paginator-rpp-options p-dropdown p-component p-inputwrapper p-inputwrapper-filled"]/span[@class="p-element p-dropdown-label p-inputtext ng-star-inserted"]');

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);
  
  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

  console.log(resultCount.length);

  const pageResultCount = resultCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);

  for (let i = 0; i < resultCount.length; i++) {
      const resultText = await resultCount[i].textContent();
      console.log(resultText);
      }
      
}
async verifyConfirmedRecords20() {

  await this.page.waitForSelector('[data-testid="td-status"]>div>i~span');
  await this.page.waitForSelector('[data-testid="td-last-modified"]>div>span:nth-of-type(2)');
  await this.page.waitForSelector('//div[@class="p-paginator-rpp-options p-dropdown p-component p-inputwrapper p-inputwrapper-filled"]/span[@class="p-element p-dropdown-label p-inputtext ng-star-inserted"]');

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);
  
  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
  const bookingsCount = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').all();

  console.log(resultCount.length);
  console.log(bookingsCount.length);

  const pageResultCount = resultCount.slice(0, recordsPerPage);
  const pageBookingsCount = bookingsCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);
  expect(pageBookingsCount.length).toBe(recordsPerPage);

  if (resultCount.length === bookingsCount.length) {
      console.log("All are equal");
  }

  for (let i = 0; i < resultCount.length; i++) {
      for(let j=0;j<bookingsCount.length;j++){
      const resultText = await resultCount[i].textContent();
      const bookingsText = await bookingsCount[i].textContent();
      expect(resultText?.trim()).toContain(ENV.STATUS2);
      expect(bookingsText?.trim()).toBe(ENV.STATUS3);
      }
      
}

}
async verifydraftRecords20() {

  await this.page.waitForSelector('[data-testid="td-status"]>div>i~span');
  await this.page.waitForSelector('//div[@class="p-paginator-rpp-options p-dropdown p-component p-inputwrapper p-inputwrapper-filled"]/span[@class="p-element p-dropdown-label p-inputtext ng-star-inserted"]');

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);
  
  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

  console.log(resultCount.length);

  const pageResultCount = resultCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);

  for (let i = 0; i < resultCount.length; i++) {
      const resultText = await resultCount[i].textContent();
      expect(resultText?.trim()).toContain(ENV.STATUS1);
      }
      
}
async allbookingsrec30() {
  console.log("before click");
  await this.dropdown2.click();
  console.log("after click");
  console.log("before click");
  await this.select30.click();
  console.log("after click");

}
async verifyallRecords30() {
  await this.page.waitForLoadState('networkidle');

  // Wait for the dropdown and elements to be visible with retries
  await this.retryUntilVisible(this.textvalue);
  await this.retryUntilVisible(this.status1.first());

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

  const pageResultCount = resultCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);

  for (let i = 0; i < resultCount.length; i++) {
      const resultText = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();
      console.log(resultText);
  }
}

// Helper function to wait for element visibility with retries
// async retryUntilVisible(locator: Locator, maxRetries = 10, delay = 1000) {
//     for (let i = 0; i < maxRetries; i++) {
//         if (await locator.isVisible()) return;
//         await this.page.waitForTimeout(delay);
//     }
//     throw new Error('Element not visible after retries');
// }
async verifyConfirmedRecords30() {
  await this.page.waitForLoadState('networkidle');

  // Wait for the dropdown and elements to be visible with retries
  await this.retryUntilVisible(this.textvalue);
  await this.retryUntilVisible(this.status1.first());
  await this.retryUntilVisible(this.status2.first());

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();
  const bookingsCount = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').all();

  const pageResultCount = resultCount.slice(0, recordsPerPage);
  const pageBookingsCount = bookingsCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);
  expect(pageBookingsCount.length).toBe(recordsPerPage);

  for (let i = 0; i < resultCount.length; i++) {
      const resultText = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();
      const bookingsText = await this.page.locator('[data-testid="td-last-modified"]>div>span:nth-of-type(2)').nth(i).textContent();

      expect(resultText?.trim()).toContain(ENV.STATUS2);
      expect(bookingsText?.trim()).toBe(ENV.STATUS3);
  }
}

// Helper function to wait for element visibility with retries
async retryUntilVisible(locator, maxRetries = 10, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
      if (await locator.isVisible()) return;
      await this.page.waitForTimeout(delay);
  }
  throw new Error('Element not visible after retries');
}
async verifydraftRecords30() {
  await this.page.waitForLoadState('networkidle');

  // Wait for the dropdown and elements to be visible with retries
  await this.retryUntilVisible(this.textvalue);
  await this.retryUntilVisible(this.status1.first());

  const recordsPerPageText = await this.textvalue.textContent();
  const recordsPerPage = parseInt(recordsPerPageText?.trim() || "0", 10);

  const resultCount = await this.page.locator('[data-testid="td-status"]>div>i~span').all();

  const pageResultCount = resultCount.slice(0, recordsPerPage);

  expect(pageResultCount.length).toBe(recordsPerPage);

  for (let i = 0; i < resultCount.length; i++) {
      const resultText = await this.page.locator('[data-testid="td-status"]>div>i~span').nth(i).textContent();

      expect(resultText?.trim()).toContain(ENV.STATUS1);
  }
}
// async retryUntilVisible(locator: Locator, maxRetries = 10, delay = 1000) {
//     for (let i = 0; i < maxRetries; i++) {
//         if (await locator.isVisible()) return;
//         await this.page.waitForTimeout(delay);
//     }
//     throw new Error('Element not visible after retries');
// }
}

