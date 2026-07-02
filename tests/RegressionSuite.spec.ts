import { test, expect } from '@playwright/test';
import { General } from '../lib/General';

test.describe('Regression Suite', () => {
  test('TC001 login', async ({ page }) => {
    const obj = new General(page);
    await obj.OpenApplication();
    await obj.loginToApplication();
  });
  test('TC002 logout', async ({ page }) => {
    const obj = new General(page);
    await obj.OpenApplication();
    await obj.loginToApplication();
    await obj.logoutFromApplication();
  } );
});