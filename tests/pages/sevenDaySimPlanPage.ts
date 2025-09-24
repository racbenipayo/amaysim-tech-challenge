import { expect, type Locator, type Page } from '@playwright/test';

export class sevenDaySimPlanPage {
    readonly page: Page;
    readonly buyNowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buyNowButton = page.getByRole('link', { name: 'Buy now' });
    }

    async viewBuyNowButton() {
        await expect(this.buyNowButton).toBeVisible();
    }

    async clickBuyNowButton() {
        await this.viewBuyNowButton();
        await this.buyNowButton.click();
    }


}