import { test, expect } from '@playwright/test';
import { General } from '../lib/General';

test.describe('Regression Suite', () => {
  test('TC001 login', async ({ page }) => {
    let obj = new General(page);
    await obj.OpenApplication();
    await obj.loginToApplication();
  });
  test('TC002 logout', async ({ page }) => {
    let obj = new General(page);
    await obj.OpenApplication();
    await obj.loginToApplication();

  } );
    test('TC003', async ({ page }) => {
console.log("TC003");
  } );
});