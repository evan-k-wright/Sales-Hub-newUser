module.exports = {
    url: 'http://admin.salesos.info/users/login',
    elements: {
        //login
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',
            user: 'a[href="/employees"]',
    }
}