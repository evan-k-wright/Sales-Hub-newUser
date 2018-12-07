module.exports = {
    url: 'http://admin.salesos.info/users/login',
    elements: {
        //login
            canvassApp: 'a[class="enabled app-canvass"]',
            canvass: 'div[class="current-app"]',
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //edit user
            admin: 'input[name="admin"]',
            changePassword: 'input[name="change_password"]',
            firstName: 'input[name="first_name"]',
            lastName: 'input[name="last_name"]',
            save: 'button[type="submit"]',
            userPassword: 'input[name="password"]',
            user: 'a[href="/employees"]',

            //xpath
                AAA: {
                    selector: '//a[.="AAA Saleshub"]',
                    locateStrategy: 'xpath'
                },

                AAA333: {
                    selector: '//a[.="AAA 333 Canvass"]',
                    locateStrategy: 'xpath'
                },
    }
}