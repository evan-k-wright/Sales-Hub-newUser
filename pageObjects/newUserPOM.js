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
            
        //new user
            active: 'input[name="active"]',
            admin: 'input[name="admin"]',
            addUser: 'a[href="/employees/add"]',
            assignGroup: 'a[href="/employees/groups/6233"]',
            email: 'input[name="email"]',
            firstName: 'input[name="first_name"]',
            lastName: 'input[name="last_name"]',
            mobilePhone: 'input[name="mobile_phone"]',
            nextPage: 'a[href="/employees?page=2"]',
            newUserTitle: 'h1',
            nickname: 'input[name="alias"]',
            save: 'button[type="submit"]',
            userPassword: 'input[name="password"]',
            user: 'a[href="/employees"]',

            //xpath
                AAA: {
                    selector: '//a[.="AAA"]',
                    locateStrategy: 'xpath'
                },
    }
}