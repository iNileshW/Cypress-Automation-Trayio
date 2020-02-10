/// <reference types = "cypress"/>
class TrayioLoginPage
{
    fillEmail(value){
        const field = cy.get('[name=username]'); //login
        field.clear();
        field.type(value);
        return this;
    }

    fillPassword(value){
        const field = cy.get('[name=password]'); //password
        field.clear();
        field.type(value);
        return this;
    }

    submit(){
        const submit = cy.get('#app > div > div.Auth-content___2BLZFK > div.Login___2-904Y > form > div > button');
        burgermenu.click();
        return this;
    }        
}

export default TrayioLoginPage