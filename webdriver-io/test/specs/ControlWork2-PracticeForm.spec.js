import { expect } from "@wdio/globals";
import PracticeFormPage from "../../pages/PracticeFormPage.js";
import homePage from "../../pages/homePage.js";
import FormsPage from "../../pages/FormsPage.js";

describe("PracticeFormPage", () => {

    it('Practice Forms ', async () => {
        await homePage.openForms();
        await expect(browser).toHaveUrl("https://demoqa.com/forms");

        await (await FormsPage.PracticeForm).click()
        await expect(browser).toHaveUrl("https://demoqa.com/automation-practice-form");

        await PracticeFormPage.fillName('Ivan', 'Petrov');
        await expect(PracticeFormPage.firstName).toHaveElementProperty('value', 'Ivan');
        await expect(PracticeFormPage.lastName).toHaveElementProperty('value', 'Petrov');

        await PracticeFormPage.fillEmail('ivan@test.com');
        await expect(PracticeFormPage.inputEmail).toHaveValue('ivan@test.com');

        await PracticeFormPage.selectGender('Male');
        const maleRadioInput = await $('#gender-radio-1');
        await expect(maleRadioInput).toBeSelected();

        const dob = { day: '3', month: 'December', year: 1990 }; // пример
        await PracticeFormPage.setDateOfBirth(dob);

        const monthShortMap = {
            January: 'Jan', February: 'Feb', March: 'Mar', April: 'Apr',
            May: 'May', June: 'Jun', July: 'Jul', August: 'Aug',
            September: 'Sep', October: 'Oct', November: 'Nov', December: 'Dec'
        };
        const dayFormatted = String(dob.day).padStart(2, '0');
        const expectedDobValue = `${dayFormatted} ${monthShortMap[dob.month]} ${dob.year}`;

        await expect(PracticeFormPage.dateInput).toHaveValue(expectedDobValue);

        await PracticeFormPage.fillMobile('9991234567');
        await expect(PracticeFormPage.inputMobile).toHaveElementProperty('value', '9991234567');

        const subjectText = 'Computer Science'
        await PracticeFormPage.fillSubject(subjectText);
        await PracticeFormPage.selectedSubjectToken.waitForExist({
            timeout: 7000,
            message: 'Токен выбранного предмета не появился после заполнения.'
        });
        await expect(PracticeFormPage.selectedSubjectToken).toBeDisplayed();
        await expect(PracticeFormPage.selectedSubjectToken).toHaveText(subjectText);

        await PracticeFormPage.selectHobby('Reading');
        const checkbox = await $('#hobbies-checkbox-2');
        await expect(checkbox).toBeSelected();

        const singleFilePath = '111.png'; // Имя файла в папке test-data
        await PracticeFormPage.uploadFile(singleFilePath);
        await browser.pause(3000);

        await PracticeFormPage.fillCurrentAddress('Minsk, Lenin street 12');
        await expect(PracticeFormPage.currentAddressInput).toHaveValue('Minsk, Lenin street 12');

    });


})