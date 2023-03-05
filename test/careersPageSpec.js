describe("Careers page 'Apply Now!' form flow", () => {
    it("Open 'Apply Now!' Form", (browser) => {
        let careersPage = browser.page.careersPage();
        careersPage
            .navigate()
            .click('@applyNowBtn')
            .assert.hasClass('@applyNowForm', 'open')
            .assert.textEquals('@applyNowFormTitle', 'Join Our Team')
    });

    it("Validate mandatory fields", (browser) => {
        let careersPage = browser.page.careersPage();
        careersPage
            .click('@applyNowFormSendBtn')
            .assert.cssProperty('@applyNowFormNameField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.cssProperty('@applyNowFormEmailField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.cssProperty('@applyNowFormLinkedInField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.cssProperty('@applyNowFormCommentsField', 'border', '1px solid rgb(255, 0, 0)')
    });

    it("Validate red border disappears when filling mandatory fields", (browser) => {
        let careersPage = browser.page.careersPage();
        careersPage
            .fillForm('Test Name', 'testmail@mail.com', 'http://linkedin.com/in/test', 'testing 1234')
            .assert.not.cssProperty('@applyNowFormNameField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.not.cssProperty('@applyNowFormEmailField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.not.cssProperty('@applyNowFormLinkedInField', 'border', '1px solid rgb(255, 0, 0)')
            .assert.not.cssProperty('@applyNowFormCommentsField', 'border', '1px solid rgb(255, 0, 0)')
    });
})