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
            admin: 'input[name="admin"]',


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
    }
}