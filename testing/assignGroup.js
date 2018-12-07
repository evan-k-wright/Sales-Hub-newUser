module.exports = {
    after: (browser) => {
        browser.end()
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
    }
}