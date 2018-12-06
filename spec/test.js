// const puppeteer = require('puppeteer');
// const axios = require('axios');

// describe('test the front end', () => {
//   let page;
//   let browser;
//   beforeAll(async () => {
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 80
//     });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3010/restaurants/1');
//   })

//   test('read more hyperlink', async () => {
//     await page.waitForSelector('#description')
//     const length1 = await page.$eval('#description', e => e.innerText.length)
//     await page.waitForSelector('.hyperlink');
//     await page.click('.hyperlink');
//     await page.waitForSelector('#description')
//     const length2 = await page.$eval('#description', e => e.innerText.length)
//     await expect(length2 > length1).toBe(true);
    
//   })

//   afterAll(() => {
//     browser.close();
//   })
// }, 16000
// )