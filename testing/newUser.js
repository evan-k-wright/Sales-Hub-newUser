const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'New User': (browser) => {
        let newUserPOM = browser.page.newUserPOM();
        newUserPOM.navigate()
            //login
                .waitForElementVisible('@companyURL', 5000)
                .waitForElementVisible('@username', 5000)
                .waitForElementVisible('@password', 5000)
                .setValue('@companyURL', data.company)
                .setValue('@username', data.username)
                .setValue('@password', data.password)
                .waitForElementVisible('@loginButton', 5000)
                .click('@loginButton')
                .waitForElementVisible('@salesHub', 5000)

            //new user
                .waitForElementVisible('@user', 5000)
                .click('@user')
                .waitForElementVisible('@userTitle', 5000)
    }
}