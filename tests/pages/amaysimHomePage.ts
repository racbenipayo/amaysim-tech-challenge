import { expect, type Locator, type Page } from '@playwright/test';

export class amaysimHomePage {
    readonly page: Page;
    readonly simPlansLink: Locator;
    readonly sevenDaySimPlanLink: Locator;
    readonly sevenDaySimPlansHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.simPlansLink = page.getByRole('link', { name: 'SIM plans', exact: true });
        this.sevenDaySimPlanLink = page.getByRole('link', { name: '7 day SIM plans' });
        this.sevenDaySimPlansHeader = page.getByRole('heading', { name: 'Day SIM Plans' });
    }

    async goToAmaysimHomePage() {
        await this.page.goto('/');
    }

    async hoverOnSimPlans() {
        await this.simPlansLink.hover();
        await expect(this.sevenDaySimPlanLink).toBeVisible();
    }

    async clickSevenDaySimPlans() {
        await this.hoverOnSimPlans();
        await this.sevenDaySimPlanLink.click();
        await expect(this.sevenDaySimPlansHeader).toBeVisible();
    }
}