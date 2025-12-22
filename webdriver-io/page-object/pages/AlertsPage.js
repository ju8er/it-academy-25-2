

class AlertsPage {
    get browserWindows() {
        return $$('//*[@id="item-0"]');
    }

    get alerts() {
        return $('div.element-list.collapse.show li#item-1');
    }

    get frames() {
        return $$('//*[@id="item-2"]');
    }

    get nestedFrames() {
        return $$('//*[@id="item-3"]');
    }

    get modalDialog() {
        return $$('//*[@id="item-4"]');
    }

    //Методы

    async clickButtonToSeeAlert(alerts) {
        const button = await $('#alertButton');
        await button.waitForDisplayed({ timeout: 10000 });
        await button.waitForClickable({ timeout: 1000 });
        await button.click();


    }
}






export default new AlertsPage();
