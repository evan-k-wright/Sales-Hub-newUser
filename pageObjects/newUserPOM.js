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
            addUser: 'a[href="/employees/add"]',
            email: 'input[name="email"]',
            firstName: 'input[name="first_name"]',
            lastName: 'input[name="last_name"]',
            mobilePhone: 'input[name="mobile_phone"]',
            newUserTitle: 'h1',
            nickname: 'input[name="alias"]',
            userPassword: 'input[name="password"]',
            user: 'a[href="/employees"]',

    }
}