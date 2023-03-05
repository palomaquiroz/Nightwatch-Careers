const formCommands = {
    fillForm: function (userName, userEmail, userProfile, comments) {
        return this
            .setValue('@applyNowFormNameField', userName)
            .setValue('@applyNowFormEmailField', userEmail)
            .setValue('@applyNowFormLinkedInField', userProfile)
            .setValue('@applyNowFormCommentsField', comments)
    }
}

module.exports = {
    url: 'https://inhouse.decemberlabs.com/careers/',
    commands: [formCommands],
    elements: {
        applyNowBtn: '.content_culture .launch-modal-join-us',
        applyNowForm: '.dl-joinus-modal',
        applyNowFormTitle: '.dl-joinus-modal .contact-form-heading',
        applyNowFormSendBtn: '#wpforms-submit-870',
        applyNowFormNameField: '#wpforms-870-field_0',
        applyNowFormEmailField: '#wpforms-870-field_1',
        applyNowFormLinkedInField: '#wpforms-870-field_20',
        applyNowFormCommentsField: '#wpforms-870-field_2',
    }
}