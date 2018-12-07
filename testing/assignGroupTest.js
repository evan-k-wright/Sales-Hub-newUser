const data = require('../sources/data')

module.exports = {
    after: (browser) => {
        browser
    },

    'Assign Group': browser => {
        assignGroup = browser.page.assignGroup();
        assignGroup.navigate()
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
                .waitForElementVisible('@AAA333', 5000)
                .click('@AAA333')
                .api.useXpath()
                .moveToElement('//a[.="Manage assigned groups"]', 0, 0)
                assignGroup.waitForElementVisible('@assignGroup', 5000)
                .click('@assignGroup')
                .waitForElementVisible('@addGroup', 5000)
                .click('@layton')
                .click('@addGroup')

    }
}