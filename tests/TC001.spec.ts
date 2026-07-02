import {test, expect} from '@playwright/test';
import { General } from '../lib/General'; 

test('TC001 login', async({page})=>{
    const obj = new General(page);
    await obj.OpenApplication();
    await obj.loginToApplication();
});