import { expect } from 'chai'

describe('WebdriverIO basics', () => {
    it('load url', () => {
        const url = 'http://zero.webappsecurity.com/'
        browser.url(url)

        // const pageTitle = browser.getTitle()
        // const pageUrl = browser.getUrl()
        const metadata = browser.getMetadata()

        expect(metadata.title).to.contains('Personal Banking')
        expect(metadata.url).to.contains('webapp')
    })

    it('waitForExist example', () => {
        const signinButton = $('#signin_button')
        signinButton.click()

        const loginForm = $('#login_form')
        loginForm.waitForExist(5000)
        loginForm.waitForDisplayed()
        loginForm.waitForEnabled()
    })

    // it('static waiting', () => {
    //     browser.pause(2000)
    // })

    it('inject javascript into the browser', () => {
        const result = browser.execute((numA, numB) => {
            return numA + numB
        }, 
        5, 
        10
        )
        expect(result).to.equal(15)
    })

    it('working with inputs', () => {
        const url = 'http://zero.webappsecurity.com/'
        browser.url(url)

        const searchbox = $('#searchTerm')
        searchbox.addValue('your text')
        searchbox.clearValue()
        searchbox.setValue('your value after clearing')
    })

    it('checking the selectors state', () => {
        const url = 'http://zero.webappsecurity.com/'
        browser.url(url)

        const signInBtn= $('#signin_button')
        expect(signInBtn.isExisting()).to.be.true
        expect(signInBtn.isSelected()).to.be.false
        expect(signInBtn.isDisplayed()).to.be.true
    })
})