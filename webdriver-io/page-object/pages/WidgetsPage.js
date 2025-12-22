class WidgetsPage {

    get sliderMenuItem() {
        return $('//li[span[text()="Slider"]]');
    }

    async openSlider() {
        const widgetsSection = await $('//div[@class="header-text" and text()="Widgets"]');
        await widgetsSection.scrollIntoView();
        await widgetsSection.click();

        await this.sliderMenuItem.waitForDisplayed();
        await this.sliderMenuItem.click();
    }
}

export default new WidgetsPage();


