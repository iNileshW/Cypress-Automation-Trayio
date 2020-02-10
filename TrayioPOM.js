/// <reference types="cypress" />
import LoginPage from '../PageObjects/loginpage'
import TrayioLandingPage from '../PageObjects/TrayioLandingPage'
import TrayioLoginPage from '../PageObjects/TrayioLoginPage'
import TrayioDashboardPage from '../PageObjects/TrayioDashboardPage'

describe('Trayio Exercize',function(){
    
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
        cy.log('***********This is Setup Block************');        
        const lp = new TrayioLandingPage();        
        lp.visit();
        cy.title().should('eq','The Best API Integration Platform for Leading Enterprises | Tray.io'); // title assertion
    })
    after(function(){
        cy.log('***********This is Tear Down Block************')
    })
    beforeEach(function(){
        cy.log('***********This is Login Block************')
    })
    afterEach(function(){
        cy.log('***********This is Logout Block************')
    })
    it('Login',function(){    
        const lp = new TrayioLandingPage();
        lp.burgermenu();
        lp.login();
        cy.title().should('eq','Build & scale high value integrations | tray.io'); // title assertion
        
        const login_page = new TrayioLoginPage();
        login_page.fillEmail(this.data.email);
        login_page.fillPassword(this.data.password);
        login_page.submit();
        cy.wait(8000);
        
        const DashboardPage = new TrayioDashboardPage();
        DashboardPage.createWorkFlow(this.data.workflowname);
        cy.wait(15000);
        DashboardPage.addTrigger();
        cy.wait(15000);        
        DashboardPage.enableWorkflow();
        DashboardPage.deleteWorkFlow(this.data.deleteconfirmation);
        DashboardPage.logout();        
    })
})