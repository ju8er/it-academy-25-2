class ElementsPage {

    get radioButtonMenu() {
        return $('//li[span[text()="Radio Button"]]');
    }

    get returnToHomePage() {
        return $('//*[@id="app"]/header/a');
    }

    async openRadioButtons() {
        await $('(//div[contains(@class,"element-list")])[1]').click();
        await this.radioButtonMenu.click();
    }
}

export default new ElementsPage();
