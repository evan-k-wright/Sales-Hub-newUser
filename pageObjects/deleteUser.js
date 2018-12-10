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

        //delete user
            deleteUser: 'a[class="delete-item"]',
            
            //xpath
                AAA333: {
                    selector: '//a[.="AAA 333 Canvass"]',
                    locateStrategy: 'xpath'
                },
    }
}