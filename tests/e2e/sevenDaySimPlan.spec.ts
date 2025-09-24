import { test, expect } from '@playwright/test';
import  { amaysimHomePage } from '../pages/amaysimHomePage';
import  { sevenDaySimPlanPage } from '../pages/sevenDaySimPlanPage';
import  { cartPage } from '../pages/cartPage';

test('Amaysim home page should contain SIM Plans', async ({ page }) => {
    const amaysimHome = new amaysimHomePage(page);
    const sevenDaySimPlan = new sevenDaySimPlanPage(page);
    const cart = new cartPage(page);

    await amaysimHome.goToAmaysimHomePage();
    await amaysimHome.hoverOnSimPlans();
    await amaysimHome.clickSevenDaySimPlans();
    await sevenDaySimPlan.viewBuyNowButton();
    await sevenDaySimPlan.clickBuyNowButton();
    await cart.selectPickANewNumber();
    await cart.verifyPhysicalSimSelected();
    await cart.clickCheckOutBtn();
});

