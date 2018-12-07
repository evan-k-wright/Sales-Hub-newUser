const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
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
                .waitForElementVisible('@addUser', 5000)
                .click('@addUser')
                .waitForElementVisible('@email', 5000)
                .waitForElementVisible('@firstName', 5000)
                .waitForElementVisible('@nickname', 5000)
                .waitForElementVisible('@lastName', 5000)
                .waitForElementVisible('@mobilePhone', 5000)
                .waitForElementVisible('@userPassword', 5000)
                .setValue('@email', data.email)
                .setValue('@firstName', data.firstName)
                .setValue('@nickname', data.nickname)
                .setValue('@lastName', data.lastName)
                .setValue('@mobilePhone', data.mobilePhone)
                .setValue('@userPassword', data.userPassword)
                .waitForElementVisible('@active', 5000)
                .click('@active')
                .click('@save')
                .waitForElementVisible('@AAA', 5000)
                //.click('@admin')
                // .waitForElementVisible('@save', 5000)
    
    }
}