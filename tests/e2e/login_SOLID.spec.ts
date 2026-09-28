import path from 'path';
import dotenv from 'dotenv';
import { test } from '@playwright/test';
import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';

const env = process.env.TEST_ENV || 'qa';
const envFile = path.resolve(__dirname, '../../config/.env.' + env);
const rootEnvFile = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envFile });
dotenv.config({ path: rootEnvFile });

const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_PASSWORD = process.env.TEST_PASSWORD;

if (!TEST_EMAIL || !TEST_PASSWORD) {
    throw new Error(`Missing TEST_EMAIL or TEST_PASSWORD in the environment. Checked ${envFile} and ${rootEnvFile}`);
}

test.describe('kapruka login test', () => {

    test('valid user should login successfully', async({page})=>{
        const loginPage=new LoginPage_SOLID(page);
        await loginPage.goto();
        await loginPage.isLoaded();
        await loginPage.login(TEST_EMAIL,TEST_PASSWORD);
        await loginPage.verifySuccessLogin();
         
    })
      
});