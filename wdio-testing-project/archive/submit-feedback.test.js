import { expect } from 'chai'

describe('Submit Feedback Form Test', () => {
    before(function() {
        browser.url('http://zero.webappsecurity.com/index.html')

        const metadata = browser.getMetadata()
        expect(metadata.title).to.contains('Personal Banking')
        expect(metadata.url).to.contains('index.html')
    })

    it('should navigate to feedback page', () => {
        // $('#feedback').waitForExist(5000)
        // $('#feedback').click()
        browser.waitAndClick('#feedback')

        const metadata = browser.getMetadata()
        expect(metadata.url).to.contains('feedback.html')
    })

    it('should submit feedback form', () => {
        $('form').waitForExist(5000)
        // $('#name').setValue('some name')
        // $('#email').setValue('some email')
        // $('#subject').setValue('some subject')
        // $('#comment').setValue('some comment goes here')
        browser.waitAndTypeText('#name','some name')
        browser.waitAndTypeText('#email','some email')
        browser.waitAndTypeText('#subject','some subject')
        browser.waitAndTypeText('#comment','some comment goes here')
        // $('.btn-primary').click()
        browser.waitAndClick('.btn-primary')
    })

    it('should show success feedback page', () => {
        $('#feedback-title').waitForExist(5000)
    })
})