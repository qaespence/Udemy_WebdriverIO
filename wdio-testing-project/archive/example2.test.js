import { expect } from 'chai'

describe('Selectors Playground', () =>  {
    it('by ID', () => {
        const byID = $('#signin_button')
        byID.click()
    })

    it('by Classname', () => {
        const byClassname = $('.brand')
        byClassname.click()
    })

    it('by XPATH', () => {
        const byXPATH = $('//input[@id="searchTerm"]')
        byXPATH.click()
    })

    it('by CSS Query', () => {
        const byCSSQuery = $('form')
        byCSSQuery.isVisiable()
    })

    it('by Link Text', () => {
        const byLinkText = $('=Zero Bank')
        byLinkText.click()
    })

    it('by Partial Link Text', () => {
        const byPartialLinkText = $('*Bank')
        byPartialLinkText.click()
    })

    it('by Text', () => {
        const byText = $('h1')
    })
})
