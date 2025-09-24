import { test, expect } from '@playwright/test';
import { amaysimHomePage } from '../pages/amaysimHomePage';
import { sevenDaySimPlanPage } from '../pages/sevenDaySimPlanPage';
import { cartPage } from '../pages/cartPage';
import { checkOutPage } from '../pages/checkOutPage';

test('Amaysim home page should contain SIM Plans', async ({ page }) => {
    const amaysimHome = new amaysimHomePage(page);
    const sevenDaySimPlan = new sevenDaySimPlanPage(page);
    const cart = new cartPage(page);
    const checkOut = new checkOutPage(page);

    await amaysimHome.goToAmaysimHomePage();
    await amaysimHome.hoverOnSimPlans();
    await amaysimHome.clickSevenDaySimPlans();
    await sevenDaySimPlan.viewBuyNowButton();
    await sevenDaySimPlan.clickBuyNowButton();
    await cart.selectPickANewNumber();
    await cart.verifyPhysicalSimSelected();
    await cart.clickCheckOutBtn();
    await checkOut.verifyNewToAmaysimSelected()
    await checkOut.inputFirstName();
    await checkOut.inputLastName();
    await checkOut.inputDateOfBirth();
    await checkOut.inputEmailAddress();
    await checkOut.inputPassword();
    await checkOut.inputContactNumber();
    await checkOut.inputAddress();
    await checkOut.clickCardPaymentButton();
    await checkOut.fillCardDetails();
    await checkOut.checkAcknowledgeTOSCheckBox();
    await checkOut.clickPayNowButton();
});

