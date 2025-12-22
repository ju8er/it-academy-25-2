import { expect } from "@wdio/globals";
import ElementsPage  from "../../pages/ElementsPage.js";
import RadioButtonsPage from "../../pages/RadioButtonsPage.js";
import SliderPage from "../../pages/SliderPage.js";
import WidgetsPage from "../../pages/WidgetsPage.js";
import HomePage from "../../pages/homePage.js";

describe('demoqa tests', () => {
    it('move to new link', async () => {

        await HomePage.openMainPage()
        const oldWindow = await browser.getWindowHandle();
        const oldHandles = await browser.getWindowHandles();

        await HomePage.trainingLink.click();

        await browser.waitUntil(
            async () => {
                const handles = await browser.getWindowHandles();
                return handles.length > oldHandles.length;
            },
            { timeout: 15000, timeoutMsg: "New tab did not open" } // 15 секунд
        );
        const allHandles = await browser.getWindowHandles();
        const newTab = allHandles.find(h => h !== oldWindow);

        await browser.switchToWindow(newTab);

        await expect(browser).toHaveUrl("https://www.toolsqa.com/selenium-training/");

        await browser.switchToWindow(oldHandles[0]);
        await expect(browser).toHaveUrl("https://demoqa.com/");

    })

    it("move to link Elements", async () => {
        await HomePage.openMainPage();

        await (await HomePage.elementsCard).click();
        await expect(browser).toHaveUrl("https://demoqa.com/elements");

        await (await ElementsPage.returnToHomePage).click();
        await expect(browser).toHaveUrl("https://demoqa.com/");

    })

    it("check choosen radiobatton from elements", async () => {
        await HomePage.openMainPage();

        await (await HomePage.elementsCard).click();

        await ElementsPage.openRadioButtons();

        await RadioButtonsPage.openRadioButtonMenu();

        await RadioButtonsPage.clickYes();
        await RadioButtonsPage.expectYesChecked();
    });

    it("check slider from widgets", async () => {
        await HomePage.openMainPage();

        await (await HomePage.widgetsCard).click();

        await expect(browser).toHaveUrl("https://demoqa.com/widgets");

        await WidgetsPage.openSlider();

        await expect(browser).toHaveUrl("https://demoqa.com/slider");

        await SliderPage.setSliderValue(50);

        await SliderPage.expectSliderValue(50);
    });
})

