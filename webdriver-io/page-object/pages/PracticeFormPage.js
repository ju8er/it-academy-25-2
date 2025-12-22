import * as fs from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class PracticeFormPage {

    //Поля
    get firstName() {
        return $('#firstName');
    }
    get lastName() {
        return $('#lastName');
    }
    get inputEmail() {
        return $('#userEmail');
    }
    get inputMobile() {
        return $('#userNumber');
    }

    get dateInput() {
        return $('#dateOfBirthInput')
    }
    get yearSelect() {
        return $('.react-datepicker__year-select')
    }
    get monthSelect() {
        return $('.react-datepicker__month-select')
    }

    get subjectInput() {
        return $('#subjectsInput');
    }

    get subjectFirstSuggestion() {
        return $('.subjects-auto-complete__menu .subjects-auto-complete__option');
    }

    get selectedSubjectToken() {
        return $('.subjects-auto-complete__multi-value__label');
    }

    get subjectSuggestions() {
        return $$('.subjects-auto-complete__option');
    }

    get addressInput() {
        return $('#addressInput');
    }

    //Радиобаттон
    genderOption(gender) {
        return $('label[for="gender-radio-1"]')
    }

    //Чекбокс
    hobbyOption(hobby) {
        const map = {
            Sport: 'hobbies-checkbox-1',
            Reading: 'hobbies-checkbox-2',
            Music: 'hobbies-checkbox-3'
        };

        return $(`label[for="${map[hobby]}"]`);
    }

    //Загрузка файлов
    get uploadInput() {
        return $('#uploadPicture')
    }

    get currentAddressInput() {
        return $('//*[@id="currentAddress"]');
    }

    // Select (State / City)
    get stateSelect() {
        return $('#state')
    }
    get citySelect() {
        return $('#city')
    }

    get submitBtn() {
        return $('#submit');
    }

    //Методы
    async fillName(first, last) {
        await this.firstName.waitForDisplayed({ timeout: 5000 });
        await this.firstName.setValue(first);
        await this.lastName.waitForDisplayed({ timeout: 5000 });
        await this.lastName.setValue(last);
    }

    async fillEmail(email) {
        await this.inputEmail.setValue(email)
    }

    async selectGender(gender) {
        await this.genderOption(gender).click();
    }

    async fillMobile(phone) {
        await this.inputMobile.setValue(phone)
    }

    async setDateOfBirth({ day, month, year }) {
        //убираем рекламу
        await browser.execute(() => {
            document.querySelectorAll("iframe, [id*='google'], [id*='ads'], .adsbygoogle")
                .forEach(el => el.remove());
        });
        await this.dateInput.scrollIntoView();
        await this.dateInput.waitForClickable({ timeout: 5000 });

        await this.dateInput.click();

        // выбираем год и месяц в селектах
        await (await this.yearSelect).selectByVisibleText(String(year));
        await (await this.monthSelect).selectByVisibleText(month);

        // выбираем день — игнорируем дни вне текущего месяца
        const dayInt = Number(day); // если '03' -> 3
        const daySelector = `//div[contains(@class,"react-datepicker__day") and not(contains(@class,"react-datepicker__day--outside-month")) and text()="${dayInt}"]`;
        const dayEl = await $(daySelector);
        await dayEl.click();
    }

    async fillSubject(subject) {
        await this.subjectInput.setValue(subject);
        await browser.waitUntil(async () => {
            const items = await this.subjectSuggestions;
            return items.length > 0;
        }, {
            timeout: 5000,
            timeoutMsg: 'Подсказки предметов не появились'
        });
        const suggestions = await this.subjectSuggestions;

        for (const item of suggestions) {
            const text = await item.getText();
            if (text.toLowerCase().includes(subject.toLowerCase())) {
                await item.click();
                return;
            }
        }
        await browser.keys('Enter');
    }

    async selectHobby(hobby) {
        const option = await this.hobbyOption(hobby);
        await option.waitForDisplayed();
        await option.click();
    }

    async uploadFile(fileName) {
        const filePath = path.join(__dirname, '..', 'test-data', fileName);
        if (!fs.existsSync(filePath)) {
            throw new Error(`Файл не найден: ${filePath}`);
        }
        await this.uploadInput.setValue(filePath);
    }

    async fillCurrentAddress(text) {
        await this.currentAddressInput.waitForDisplayed({ timeout: 5000 });
        await this.currentAddressInput.setValue(text);
    }

    async fillAddress(text) {
        await this.addressInput.setValue(text);
    }

    async submit() {
        await this.submitBtn.click();
    }

    open() {
        return super.open('/automation-practice-form');
    }
}

export default new PracticeFormPage()
