import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config/env.config';
import { BasePage_SOLID } from './BasePage_SOLID';

export class LoginPage_SOLID extends BasePage_SOLID {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByLabel('Email address');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto():Promise<void>{
        await this.Navigate(`${config.baseUrl}${config.loginPath}`)
    }

    async login(email:string,password:string):Promise<void>{
        await this.Fill(this.emailInput,email)
        await this.Fill(this.passwordInput,password)
        await this.click(this.loginButton)
    }
    

    async verifySuccessLogin(): Promise<void> {
         const currentUrl=this.page.url();
         await expect(this.page).not.toHaveURL(/accountLogin/)
    }

    async isLoaded(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }
}