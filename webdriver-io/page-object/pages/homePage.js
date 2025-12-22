class HomePage {
    get trainingLink() {
        return $('a[href="https://www.toolsqa.com/selenium-training/"]');
    }

    get elementsCard() {
        return $('div.card.mt-4.top-card:first-of-type');
    }

    get formsCard() {
        return $('#app .home-body div:nth-child(2)')
    }

    get alertsFrameWin() {
        return $('//h5[text()="Alerts, Frame & Windows"]/ancestor::div[contains(@class,"top-card")]')
    }

    get widgetsCard() {
        return $('//h5[text()="Widgets"]/ancestor::div[contains(@class,"top-card")]');
    }

    get Interactions() {
        return $('#app .home-body div:nth-child(5)');
    }

    get BookStore() {
        return $('#app .home-body div:nth-child(6)');
    }


    async openMainPage() {
        await browser.url("https://demoqa.com/");
    }

    async openForms() {
        await browser.url("https://demoqa.com/forms");
    }

}

export default new HomePage();
