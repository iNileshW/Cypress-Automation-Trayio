/// <reference types = "cypress"/>

class LoginPage
{
    // Elements & methods:
    visit()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    fillEmail(value)
    {
        // Saving element in variable can be var or const
        const field = cy.get('#email')
        field.clear();
        field.type(value);
        // To return the class in JS
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('#password')
        field.clear();
        field.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('[type=submit]');
        button.click();
        return this;
    }    
}

// To make this class available to all test cases so export this class by following commnad
export default LoginPage