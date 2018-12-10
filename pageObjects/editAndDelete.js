module.exports = {
    url: 'http://admin.salesos.info/users/login',
    elements: {
        //login
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            save: 'button[type="submit"]',
            username: 'input[placeHolder="Username"]',
            user: 'a[href="/employees"]',

        //edit group
            active: 'input[name="active"]',
            admin: 'input[name="admin"]',
            cancel: 'a[class="cancel-button"]',
            defaultAlert: 'div[role="alert"]',
            groupSavedAlert: 'div[class="alert alert-warning"]',
            save: 'button[type="submit"]',

                //xpath
                    AAA333: {
                        selector: '//a[.="AAA 333 Canvass"]',
                        locateStrategy: 'xpath'
                    },

                    assignGroup: {
                        selector: '//a[.="Manage assigned groups"]',
                        locateStrategy: 'xpath'
                    },

                    default: {
                        selector: '//a[.="Set as default group"]',
                        locateStrategy: 'xpath'
                    },

                    layton: {
                        selector: '//a[.="Layton"]',
                        locateStrategy: 'xpath'
                    },

        //delete group
            remove: 'a[class="delete-item"]',

            //xpath
                layton: {
                    selector: '//a[.="Layton"]',
                    locateStrategy: 'xpath'
                },
    }
}