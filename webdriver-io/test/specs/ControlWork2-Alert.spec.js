import { expect } from "@wdio/globals";
import homePage from "../../pages/homePage.js";
import alertsPage from "../../pages/AlertsPage.js";


describe('Control Work2 Alerts', () => {
    it('Test alert', async () => {
        await homePage.openMainPage()
        await (await homePage.alertsFrameWin).click();
        await expect(browser).toHaveUrl("https://demoqa.com/alertsWindows");
        await (await alertsPage.alerts).click();
        await browser.execute(() => {
            document.querySelectorAll('iframe, [id*="google"], [class*="ads"], .ad').forEach(el => el.remove());
        });
        await expect(browser).toHaveUrl("https://demoqa.com/alerts");

        //Жмем на алерт
        await alertsPage.clickButtonToSeeAlert();
        const alertText = await browser.getAlertText()
        expect(alertText).toBe('You clicked a button');
        await browser.acceptAlert();
    });
})