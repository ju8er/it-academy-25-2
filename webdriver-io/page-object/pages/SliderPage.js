class SliderPage {

    get slider() {
        return $('input[type="range"].range-slider');
    }

    async setSliderValue(value) {
        await this.slider.waitForDisplayed();

        await browser.execute((val) => {
            const slider = document.querySelector('input[type="range"].range-slider');
            slider.value = val;
            slider.dispatchEvent(new Event('input', { bubbles: true }));
            slider.dispatchEvent(new Event('change', { bubbles: true }));
        }, value);
    }

    async expectSliderValue(value) {
        await expect(this.slider).toHaveValue(String(value));
    }
}

export default new SliderPage();
