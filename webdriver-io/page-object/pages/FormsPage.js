class FormsPage {

    get PracticeForm() {
        return $('//span[@class=\'text\'][text()=\'Practice Form\']')
    }

}

export default new FormsPage()