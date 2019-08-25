import { expect } from 'chai'

describe('Forgotten Password Test', () => {
    it('should navigate to homepage', () => {
        browser.url('http://zero.webappsecurity.com/index.html')

        const metadata = browser.getMetadata()
        expect(metadata.title).to.contains('Personal Banking')
        expect(metadata.url).to.contains('index.html')
    })

    it('should click on signin button', () => {
        // const signInButton = $('#signin_button')
        // signInButton.click()
        browser.waitAndClick('#signin_button')

        const metadata = browser.getMetadata()
        expect(metadata.url).to.contains('login.html')
    })

    it('should click on forgotten password link', () => {
        // const passwordLink = $('*=Forgot your password ?')
        // passwordLink.waitForExist(5000)
        // passwordLink.click()
        browser.waitAndClick('*=Forgot your password ?')

        const pageTitle = $('h3')
        pageTitle.waitForExist(5000)
        expect(pageTitle.getText()).to.contains('Forgotten Password')
    })

    it('should request new password', () => {
        // const emailInput = $('#user_email')
        // const submitButton = $('.btn-primary')

        // emailInput.waitForExist(5000)
        // emailInput.setValue('random@email.com')
        browser.waitAndTypeText('#user_email','random@email.com')
        // submitButton.click()
        browser.waitAndClick('.btn-primary')
    })
})