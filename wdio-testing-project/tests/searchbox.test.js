import NavBar from '../components/NavBar'

describe('Searchbox Test', () => {
    it('should load homepage and search for some value', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        NavBar.search('text to search for')
    })

})