class RadioButtonsPage {

    get yesRadio() {
        return $('#yesRadio');
    }

    get yesLabel() {
        return $('label[for="yesRadio"]');
    }

    async openRadioButtonMenu() {
        await $('//li[span[text()="Radio Button"]]').click();
    }

    async clickYes() {
        await this.yesLabel.click();
    }

    async expectYesChecked() {
        await expect(this.yesRadio).toBeSelected();
    }
}

export default new RadioButtonsPage();
