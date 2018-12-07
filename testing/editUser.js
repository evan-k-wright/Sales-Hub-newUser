const data = require('../sources/data')

module.exports ={  
    after: browser => {
        browser.end()
    },

'Edit User': (browser) => {
let editUser = browser.page.editUser();
editUser.navigate()
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

        //edit user
            .waitForElementVisible('@user', 5000)
            .click('@user')
            .waitForElementVisible('@AAA', 5000)
            .click('@AAA')
            .waitForElementVisible('@firstName', 5000)
            .waitForElementVisible('@lastName', 5000)
            .waitForElementVisible('@changePassword', 5000)
            .click('@changePassword')
            .waitForElementVisible('@userPassword', 5000)

    }
}