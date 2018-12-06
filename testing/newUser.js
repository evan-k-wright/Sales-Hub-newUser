const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'New User': (browser) => {
        let newUserPOM = broswer.page.newUserPOM()
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
    }
}