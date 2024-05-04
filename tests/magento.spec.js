const { test, expect } = require('@playwright/test');
test('Homepage display', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await expect(page).toHaveTitle(/Home Page/);
  });
test('Signin', async({page})=>{
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).fill('kissmebaby2939798918@gmail.com');
  await page.getByLabel('Password').fill('Aiai2000sg');
  await page.getByLabel('Password').press('Enter');
  await expect(await page.locator('.logged-in').getAttribute('data-bind')).toContain('Welcome, ');

});
test('Signup', async({page})=>{
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Create an Account' }).click();
    await page.getByLabel('First Name').fill('Thien');
    await page.getByLabel('Last Name').fill('Nguyen Hoang');
    await page.getByLabel('Email', { exact: true }).fill('kissmebaby2939798918@gmail.com');
    await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Aiai2000sg');
    await page.getByLabel('Confirm Password').fill('Aiai2000sg');
    await page.getByRole('button', { name: 'Create an Account' }).click();
    await expect(await page.locator('.base')).toHaveText('My Account');
});