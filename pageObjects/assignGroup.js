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
            user: 'a[href="/employees"]',

        //assign group
            assignGroup: 'a[href="/employees/groups/6233"]',

            //xpath
                AAA333: {
                    selector: '//a[.="AAA 333 Canvass"]',
                    locateStrategy: 'xpath'
                },
    }
}