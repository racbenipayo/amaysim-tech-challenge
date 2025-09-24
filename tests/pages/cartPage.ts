import { expect, type Locator, type Page } from '@playwright/test';

export class cartPage {
    readonly page: Page;
    readonly orderSummaryHeader: Locator;
    readonly pickANewNumberSelection: Locator;
    readonly checkPhysicalSim: Locator;
    readonly pickADifferentNumberLink: Locator;
    readonly checkOutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderSummaryHeader = page.getByTestId('desktop-cart-summary-header');
        this.pickANewNumberSelection = page.getByText('pick a new number').first();
        this.pickADifferentNumberLink = page.getByTestId('pick-different-number');
        this.checkPhysicalSim = page.locator('input[value="USIM"]');
        this.checkOutBtn = page.getByTestId('product-checkout-button');
    }

    async selectPickANewNumber() {
        await expect(this.orderSummaryHeader).toBeVisible();
        await expect(this.pickANewNumberSelection).toBeVisible();
        await this.pickANewNumberSelection.click();
        await expect(this.pickADifferentNumberLink).toBeVisible();
    }

    async verifyPhysicalSimSelected() {
        await expect(this.checkPhysicalSim).toBeChecked();
    }

    async clickCheckOutBtn() {
        await expect(this.checkOutBtn).toBeVisible();
        await this.checkOutBtn.click();
    }


}