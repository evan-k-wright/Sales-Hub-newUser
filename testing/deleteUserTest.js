const data = require('../sources/data')

module.exports = { 
        after: (browser) => {
        browser.end()
    },

    'Delete USer': browser => {
        deleteUser = browser.page.deleteUser();
        deleteUser.navigate()
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

            //delete user
                .waitForElementVisible('@user', 5000)
                .click('@user')
                .waitForElementVisible('@AAA333', 5000)
                .click('@AAA333')

    }
}