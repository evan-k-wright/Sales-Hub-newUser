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
            .click('@AAA')
            .waitForElementVisible('@firstName', 5000)
            .waitForElementVisible('@lastName', 5000)
            .waitForElementVisible('@changePassword', 5000)
            .click('@changePassword')
            .waitForElementVisible('@userPassword', 5000)
            .clearValue('@firstName')
            .clearValue('@lastName')
            .setValue('@firstName', data.editFirstName)
            .setValue('@lastName', data.editLastName)
            .setValue('@userPassword', data.editUserPassword)
            .api.useXpath()
            .moveToElement('//a[.="Manage assigned groups"]', 0, 0)
        editUser.waitForElementVisible('@admin', 5000)
            .click('@admin')
            .click('@save')
            .waitForElementPresent('@AAA333', 5000)
    },

    'Assign Group': browser => {
        assignGroup = browser.page.assignGroup();
        assignGroup.navigate()
            //edit user
            .waitForElementVisible('@user', 5000)
            .click('@user')
            .waitForElementVisible('@AAA333', 5000)
            .click('@AAA333')
            .api.useXpath()
            .moveToElement('//a[.="Manage assigned groups"]', 0, 0)
        assignGroup.waitForElementVisible('@assignGroup', 5000)
            .click('@assignGroup')
            .waitForElementVisible('@addGroup', 5000)
            .click('@layton')
            .click('@addGroup')

    },
}