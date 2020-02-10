/// <reference types = "cypress"/>
class TrayioDashboardPage
{
    createWorkFlow(value){
        const createworkflow = cy.get('#app > div.Dashboard___1_Q9lg > div.Dashboard-container___d7IB8e > div > div > div.HeaderDashboard___2xT-fL.DashboardPage-header___3dPReS > div > div > div > a > span')
        createworkflow.click();
        const name = cy.get('#modal-undefined > div > div > div.Dialog-content___KdEBac > fieldset > span > input');
        name.clear();
        name.type(value);
        const createworkflowbtn = cy.get('#modal-undefined > div > div > div.Dialog-footer___2dd59a > div > button.Button___1cl3ib.Dialog-footer-button___3SFmcA.Button-color-primary___1gnK25 > span');
        createworkflowbtn.click({ force: true});//Create workflow button
        return this;
    }

    addTrigger(){
        const addAlertTrigger = cy.get('#modal-undefined > div > div > div.Dialog-content___KdEBac > div > div > div > div:nth-child(1)')
        addAlertTrigger.click();//Select alert
        return this;
    }

    enableWorkflow(){
        const enableWorkFlowButton = cy.get('#app > div.WorkflowEditor___nsmzKm > div.Toolbar___2V-TSD > div.ButtonGroup___3ksKkT.WorkflowControls___1Xe6A- > span > button > span');
        enableWorkFlowButton.click(); //Enable
        const close = cy.get('#app > div.WorkflowEditor___nsmzKm > div.Header___3qyuQT > div.Header-right___2nIoTm > a > svg');
        close.click(); //close
        return this;
    }

    deleteWorkFlow(value){
        const options = cy.get('.WorkflowsListItem-menu___Cjw9TA > .svg-inline--fa');
        options.click({ force: true});
        const select = cy.get('#app > div.Dashboard___1_Q9lg > div.Dashboard-container___d7IB8e > div > div > div.DashboardPage-content___m4ViVZ > div > div.LayoutContainer___AO3g97.Section-fullHeight___1GVBr9 > div.LayoutContainer-container___34QR58 > div > div.Workflows-data___271wQn > div.WorkflowsList > ul > li > div.Checkbox___SjE7Xw.WorkflowsListItem-checkbox___3y7TNi > div');
        select.click({ force: true}); //Checkbox
        const threedots = cy.get('.WorkflowsActions-menu___34NIa2 > .svg-inline--fa');
        threedots.click({ force: true}); // 3 dots
        const deleteSelection = cy.get('.Workflows-Options-Delete___2ukFCm > span');
        deleteSelection.click({ force: true}); // Delete Selection
        const deleteTxtBox = cy.get('.Dialog-content___KdEBac > .Input-holder___WHJnEO > .Input___g9ZwfY');
        deleteTxtBox.type(value); // Type Delete for confirmation
        const deleteBtn = cy.get('.Dialog-footer-buttons___2_4q33 > .Button-color-primary___1gnK25 > span');
        deleteBtn.click(); // Delete button
        return this;
    }

    logout(){
        const burgerMenu = cy.get('.HeaderDashboard-button___mHWflV > .svg-inline--fa');
        burgerMenu.click(); //burger menu
        const user = cy.get('.Avatar-image___2im92S');
        user.click();
        const logout = cy.get(':nth-child(2) > .ListItemDropdown-content___1_-F0y > .ListItemDropdown-text > .ListItemDropdown-label___12_yiM > span');
        logout.click();
        return this;
    }    
}

export default TrayioDashboardPage