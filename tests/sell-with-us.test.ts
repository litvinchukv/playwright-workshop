import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByRole('textbox', { name: 'Your Full Name' }).fill('VTEST');
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill(Date.now() +'@test.com');
  await page.getByRole('textbox', { name: 'Your Phone Number' }).fill('0683561782');
  await page.getByRole('textbox', { name: 'Your Business Brand' }).fill('xxx');
  await page.getByRole('textbox', { name: 'Please Describe Your Business' }).fill('testtextshshs');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByRole('textbox', { name: 'Your Full Name' })).toBeEmpty();
});