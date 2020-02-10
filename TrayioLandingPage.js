/// <reference types = "cypress"/>
class TrayioLandingPage
{
    visit(){
        cy.visit('https://tray.io/')
    }    

    burgermenu(){
        const burgermenu = cy.get('#pageHeader > div.style-module--shadow--aFjj0 > header > div.style-module--sidebarButton--32esl > button');
        burgermenu.click();
        return this;
    }

    login(){
        const login = cy.get('#pageHeader > div.style-module--shadow--aFjj0 > header > div.style-module--sidebar--GEaUI.style-module--expanded--34zlI > div:nth-child(6) > a'); // Click login
        login.invoke('removeAttr', 'target').click();
        return this;
    }    
}

export default TrayioLandingPage