import {test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
});

test('Verify title', async ({page}) => {
    console.log(await page.title());
    await expect(page).not.toHaveTitle("Google");
    await page.screenshot({path: "screenshot.png"});
});


test("My first test case", async ({page}) => {
        console.log(await page.title());
       await expect(page).toHaveTitle("Testing");
       // await expect(page.title()).toContain("Practice");
});


