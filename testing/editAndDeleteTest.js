// const data = require('../sources/data')

// module.exports = {
//     after: (browser) => {
//         browser.end()
//     },
    
//     'Edit And Delete': browser => {
//         editAndDelete = browser.page.editAndDelete();
//         editAndDelete.navigate()
//              //login
//                 .waitForElementVisible('@companyURL', 5000)
//                 .waitForElementVisible('@username', 5000)
//                 .waitForElementVisible('@password', 5000)
//                 .setValue('@companyURL', data.company)
//                 .setValue('@username', data.username)
//                 .setValue('@password', data.password)
//                 .waitForElementVisible('@loginButton', 5000)
//                 .click('@loginButton')
//                 .waitForElementVisible('@salesHub', 5000)

//             //edit group
//                 .waitForElementVisible('@user', 5000)
//                 .click('@user')
//                 .waitForElementVisible('@AAA333', 5000)
//                 .click('@AAA333')
//                 .api.useXpath()
//                 .moveToElement('//a[.="Manage assigned groups"]', 0, 0)
//                 editAndDelete.click('@assignGroup')
//                 .waitForElementVisible('@layton', 5000)
//                 .click('@layton')
//                 .waitForElementVisible('@default', 5000)
//                 .click('@default')
//                 .waitForElementVisible('@defaultAlert',5000)
//                 .expect.element('@defaultAlert').text.to.equal("Group set to default")
//                 editAndDelete.waitForElementVisible('@layton', 5000)
//                 .click('@layton')
//                 .waitForElementVisible('@admin', 5000)
//                 .waitForElementVisible('@active', 5000)
//                 .click('@admin')
//                 .click('@active')
//                 .click('@active')
//                 .click('@cancel')
//                 .waitForElementVisible('@layton', 5000)
//                 .click('@layton')
//                 .click('@admin')
//                 .click('@active')
//                 .click('@active')
//                 .click('@save')
//                 .waitForElementVisible('@groupSavedAlert', 5000)
//                 .expect.element('@groupSavedAlert').text.to.equal("Group saved")
//                 editAndDelete.waitForElementVisible('@layton', 5000)

//             //delete group
//                 .click('@layton')
//                 .waitForElementVisible('@remove', 5000)
//                 .click('@remove')
//                 .waitForElementNotPresent('@layton', 5000)
//                 .api.acceptAlert()
//                 .waitForElementNotPresent('@layton', 5000)
//     }
// }