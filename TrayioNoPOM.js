/// <reference types="cypress" />

describe('Trayio Exercize',function(){
    it('Login',function(){
        cy.visit('https://tray.io/'); // open trayio website
        cy.title().should('eq','The Best API Integration Platform for Leading Enterprises | Tray.io'); // title assertion
        cy.get('#pageHeader > div.style-module--shadow--aFjj0 > header > div.style-module--sidebarButton--32esl > button').click(); // Click burger menu
        cy.get('#pageHeader > div.style-module--shadow--aFjj0 > header > div.style-module--sidebar--GEaUI.style-module--expanded--34zlI > div:nth-child(6) > a').invoke('removeAttr', 'target').click(); // Click login
        // cy.get('div.headroom-wrapper:nth-child(1) div.headroom.headroom--unfixed.headroom-disable-animation div.style-module--outerContainer--t0nsJ div.style-module--shadow--aFjj0 header.style-module--container--2uzan div.style-module--desktopItems--3WpKJ > a.style-module--external--2UGUm.undefined:nth-child(6)').click();
        cy.title().should('eq','Build & scale high value integrations | tray.io'); // title assertion
        
        cy.get('[name=username]').clear().type('nileshwairagade@gmail.com'); //login
        cy.get('[name=password]').clear().type('N!lesh123456'); //password
        cy.get('#app > div > div.Auth-content___2BLZFK > div.Login___2-904Y > form > div > button').click(); //login button
        cy.wait(8000);
        
        cy.get('#app > div.Dashboard___1_Q9lg > div.Dashboard-container___d7IB8e > div > div > div.HeaderDashboard___2xT-fL.DashboardPage-header___3dPReS > div > div > div > a > span').click(); // Create workflow
        cy.get('#modal-undefined > div > div > div.Dialog-content___KdEBac > fieldset > span > input').clear().type('Test'); // Workflow name
        //cy.get('#intercom-container > div > span > div > div > div > span').click(); // Notification close
        cy.get('#modal-undefined > div > div > div.Dialog-footer___2dd59a > div > button.Button___1cl3ib.Dialog-footer-button___3SFmcA.Button-color-primary___1gnK25 > span').click({ force: true});//Create workflow button
        cy.wait(15000);

        cy.get('#modal-undefined > div > div > div.Dialog-content___KdEBac > div > div > div > div:nth-child(1)').click();//Select alert
        cy.wait(15000);        
        cy.get('#app > div.WorkflowEditor___nsmzKm > div.Toolbar___2V-TSD > div.ButtonGroup___3ksKkT.WorkflowControls___1Xe6A- > span > button > span').click(); //Enable
        cy.get('#app > div.WorkflowEditor___nsmzKm > div.Header___3qyuQT > div.Header-right___2nIoTm > a > svg').click(); //close
        cy.get('.WorkflowsListItem-menu___Cjw9TA > .svg-inline--fa').click({ force: true});
        cy.get('#app > div.Dashboard___1_Q9lg > div.Dashboard-container___d7IB8e > div > div > div.DashboardPage-content___m4ViVZ > div > div.LayoutContainer___AO3g97.Section-fullHeight___1GVBr9 > div.LayoutContainer-container___34QR58 > div > div.Workflows-data___271wQn > div.WorkflowsList > ul > li > div.Checkbox___SjE7Xw.WorkflowsListItem-checkbox___3y7TNi > div').click({ force: true}); //Checkbox
        cy.get('.WorkflowsActions-menu___34NIa2 > .svg-inline--fa').click({ force: true}); // 3 dots
        cy.get('.Workflows-Options-Delete___2ukFCm > span').click({ force: true}); // Delete Selection
        cy.get('.Dialog-content___KdEBac > .Input-holder___WHJnEO > .Input___g9ZwfY').type('DELETE'); // Type Delete for confirmation
        cy.get('.Dialog-footer-buttons___2_4q33 > .Button-color-primary___1gnK25 > span').click(); // Delete button        
        cy.get('.HeaderDashboard-button___mHWflV > .svg-inline--fa').click(); //burger menu
        cy.get('.Avatar-image___2im92S').click();
        cy.get(':nth-child(2) > .ListItemDropdown-content___1_-F0y > .ListItemDropdown-text > .ListItemDropdown-label___12_yiM > span').click();
    })
})