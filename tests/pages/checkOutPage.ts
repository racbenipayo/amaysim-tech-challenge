import { expect, type Locator, type Page } from '@playwright/test';

export class checkOutPage {
    readonly page: Page;
    readonly newToAmaysimRadioBtn: Locator;
    readonly inputFirstNameTextBox: Locator;
    readonly inputLastNameTextBox: Locator;
    readonly inputDateOfBirthTextBox: Locator;
    readonly inputEmailAddressTextBox: Locator;
    readonly inputPasswordTextBox: Locator;
    readonly inputContactNumberTextBox: Locator;
    readonly inputAddressTextBox: Locator;
    readonly selectAddressInDropdown: Locator;
    readonly cardPaymentButton: Locator;
    readonly cardNumberTextBox: Locator;
    readonly cardExpiryTextBox: Locator;
    readonly cardSecurityCodeTextBox: Locator;
    readonly acknowledgeTOSCheckBox: Locator;
    readonly payNowButton: Locator;
    readonly paymentFailedView: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newToAmaysimRadioBtn = page.locator('input[value="no"]');
        this.inputFirstNameTextBox = page.getByRole('textbox', { name: 'first name' });
        this.inputLastNameTextBox = page.getByRole('textbox', { name: 'last name' });
        this.inputDateOfBirthTextBox = page.getByRole('textbox', { name: 'date of birth' });
        this.inputEmailAddressTextBox = page.getByRole('textbox', { name: 'email address' });
        this.inputPasswordTextBox = page.getByRole('textbox', { name: 'create a password' });
        this.inputContactNumberTextBox = page.locator('input[name="contactNumber"]');
        this.inputAddressTextBox = page.getByRole('textbox', { name: 'home or work address' });
        this.selectAddressInDropdown = page.getByText('Level 6 17-19 Bridge St,');
        this.acknowledgeTOSCheckBox = page.locator('label').filter({ hasText: 'I acknowledge that I have' }).locator('svg');
        this.payNowButton = page.getByRole('button', { name: 'pay now' });
        this.paymentFailedView = page.getByText('Credit Card payment failed');

        const iframeLocator = page.locator('iframe[title="Secure payment input frame"]').nth(0).contentFrame();
        this.cardPaymentButton = iframeLocator.getByTestId('card');
        this.cardNumberTextBox = iframeLocator.locator('input[id="Field-numberInput"]');
        this.cardExpiryTextBox = iframeLocator.locator('input[id="Field-expiryInput"]');
        this.cardSecurityCodeTextBox = iframeLocator.locator('input[id="Field-cvcInput"]');
    }

    async verifyNewToAmaysimSelected() {
        await expect(this.newToAmaysimRadioBtn).toBeChecked();
    }

    async inputFirstName() {
        await this.inputFirstNameTextBox.click();
        await this.inputFirstNameTextBox.fill('Test');
    }

    async inputLastName() {
        await this.inputLastNameTextBox.click();
        await this.inputLastNameTextBox.fill('Test');
    }

    async inputDateOfBirth() {
        await this.inputDateOfBirthTextBox.click();
        await this.inputDateOfBirthTextBox.fill('01/10/1998');
    }

    async inputEmailAddress() {
        await this.inputEmailAddressTextBox.click();
        await this.inputEmailAddressTextBox.fill('racbeni@mail.com');
    }

    async inputPassword() {
        await this.inputPasswordTextBox.click();
        await this.inputPasswordTextBox.fill('Password123@');
    }

    async inputContactNumber() {
        await this.inputContactNumberTextBox.click();
        await this.inputContactNumberTextBox.fill('0495462675');
    }

    async inputAddress() {
        await this.inputAddressTextBox.click();
        await this.inputAddressTextBox.fill('Level 6 17-19 Bridge St,');
        await expect(this.selectAddressInDropdown).toBeVisible({ timeout: 10000 });
        await this.selectAddressInDropdown.click();
    }

    async clickCardPaymentButton() {
        await this.cardPaymentButton.click();
        await expect(this.cardNumberTextBox).toBeVisible();
        await this.cardNumberTextBox.click();
    }

    async fillCardDetails() {
        await this.clickCardPaymentButton();
        await this.cardNumberTextBox.fill('4242 4242 4242 4242');
        await this.cardExpiryTextBox.fill('01/27');
        await this.cardSecurityCodeTextBox.fill('123');
    }

    async checkAcknowledgeTOSCheckBox() {
        await this.acknowledgeTOSCheckBox.click();
    }

    async clickPayNowButton() {
        await this.payNowButton.click({ force: true });
        await expect(this.paymentFailedView).toBeVisible({timeout : 20000 });
    }
}