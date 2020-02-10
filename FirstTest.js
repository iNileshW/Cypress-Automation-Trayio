/*
// Download Node JS
// Node.js msi file download & install the file

// Set Node Home environment
// Copy location c:/programfiles/NodeJs
// Create NODE_HOME in system variables & put path of prgram files

// Create Cypress working folder

// Generate package.json
// Node will read the requored s/w & download the ones in package.json
// In command prompt open cypress working folder generate package.json
// Run command of "npm init"
// This will generate package.json for us & enter name of package, version, description, entrypoint, test command, git, keywords, licence

// Install Cypress
// By package.json, go to cypress website of installation
// Go to project location & execute "npm install cypress --save-dev"
// Execute above command if moved so it will take cypress
// Download Visula tudio Code editor

describe('Verify Selenium Title Positive test case',function(){
    it('',function(){
        cy.visit('https://selenium.dev/')
        cy.title().should('eq','SeleniumHQ Browser Automation')        
    })
})

// To launch test runner:
// node_modules\.bin\cypress 
// To Open Test runner : 
// node_modules\.bin\cypress open
// To run the test case click on testcase name
// Cypress uses Electorn (Light weight chrome browser)
// Cypress only supports chrome & Electorn
// Electron browser faster than chrome browser

// To run test without test runner from terminal :
// To run all test cases that are in the folder but in headless mode:
// node_modules\.bin\cypress run
// To run the test cases in head mode i.e the browser is visible
// node_modules\.bin\cypress run --headed

// To run specific test case then specify location of test case
// node_modules\.bin\cypress run --headed --spec {location of testcase}
// e.g.
// node_modules\.bin\cypress run --headed --spec "cypress\integration\examples\FirstTest.js"

// To run in chrome browser from terminal : 
// node_modules\.bin\cypress run --browser chrome

// Locators in Cypress
// Only CSS Selector is used
// By cy.get(selector)
// . for class, # for id,  [attribute = value], .class[attribute = value]
// To get the CSS 3 ways : 1. chropath, 2. Open Selector Playground in test runner (generates the CSS selector)- Internal cypress way 3. Inspecting element

// To enable Cypress auto suggestion:
// locator spec.js
/// <reference types="cypress" />

describe('Amazon',function(){
    it('Amazon',function(){
        cy.visit("https://www.amazon.com") //Open Amazon
        cy.get(".nav-line-2 nav-long-width").click();
        cy.get("#ap_email").clear.type("support");
        cy.get("#continue").click();
        cy.get("[type='password']").clear.type("123456");
        cy.get("#signInSubmit").click();
        cy.title().should('eq','Authentication required');
    })
})

// Input box (Textbox)

/// <reference types="cypress" />
describe('UI Element', function(){
    it('verify textbox & radio btn',function(){
        cy.visit('http://newtours.demoaut.com/');
        cy.url().should('include','newtours');
        
        // Textbox
        cy.get('input[name=userName')
            .should('be.visible')
            .should('be.enabled')
            .clear()
            .type('mercury');
        cy.get('input[name=password]')
            .should('be.visible')
            .should('be.enabled')
            .clear()
            .type('mercury');
        cy.get('input[name=login]')
            .should('be.visible')
            .click();
        // Verify title
        cy.title.should('eq','Find a Flight: Mercury Tours:')

        //Radio button
        cy.get('input[value=rountrip')
            .should('be.visible')
            .should('be.checked');
        cy.get('input[value=oneway')
            .should('be.visible')
            .should('not.be.checked')
            .click();
        // Click continue button
        cy.get('[name=findflights'])
            .should('be.visible')
            .click();
        
        // Open test runner to run :
        // node_modules\.bin\cypress open
    })
})

// Checkbox & Dropdowns

/// <reference types="cypress" />
describe('UI Element', function(){
    it('checkbox',function(){
        cy.visit('http://demo.autationtesting.in/Register.html/');
        cy.get('#checkbox1')
            .check() //action method
            .should('be.checked') //verification
            .and('have.value','Cricket') //one more condition
        cy.get('#checkbox2')
            .check() //action method
            .should('be.checked') //verification
            .and('have.value','Movies') //one more condition
        cy.get('#checkbox3')
            .check() //action method
            .should('be.checked') //verification
            .and('have.value','Movies') //one more condition
        
        //Uncheck    
        cy.get('#checkbox2')
            .uncheck() //action method
            .should('not.be.checked') //verification
            .and('have.value','Movies') //one more condition

        // Multiple checkbox with array
        cy.get('[type=checkbox]') // 3 checkbox attribute
        // cy.get('input[type=checkbox]') // Here tag name is optional
            .check(['Cricket','Hockey','Movies']) //multiple checkbox selected            
    })

    it('Dropdowns',function(){
        cy.get('#Skills')
            .select('Android')
            .should('have.value','Android') //Select dropdown
    
        // Dynamic drop down           
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('.ui-corner-all').contains('Japanese').click();

        // Dynamic textbox
        cy.get('[role=combobox]').click();
        cy.get('select2-search__field').type('Ind')
        cy.get('select2-search__field').type('{enter}') // Enter key

    })

    it('Dynamic textbox',function(){
        // Dynamic textbox
        // Normal click will not work but forcefull click
        cy.get('[role=combobox]').click({ force: true});
        cy.get('select2-search__field').type('Ind')
        cy.get('select2-search__field').type('{enter}') // Enter key

        // If element getting hidden by another element
        cy.get('select2-search__field').type('{enter}') // Enter key        
    })

    it('Alerts',function(){
        // Cypress by default accepts alerts
        cy.visit('https://mail.rediff.com');
        cy.get('input[type=submit]').click();
        // Alert windows gets closed not displayed but the alert message is displayed
        // Message gets captured by cypress no need to write any command for closing the alert window
        // To assert the alert write an event to trigger
        // Raise an event to capture that event from Cypress
        // In documentation events given 

        // window.alert need to be raised
        // To raise event by Mocha Framework
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Please enter user name')
        }

        // Handling Confirmation Alerts with OK & Cancel button
        // use window : confirm
        cy.visit('https://testautomationpractice.blogspot.com');
        cy.get('#HTML9>div.widget-content-button').click();
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Press a button!')
        }
    })

    it('Navigation',function(){
        cy.get('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo stroe');
        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq','nopCommerce demo stroe. Register');
        cy.go('back');
        cy.title().should('eq','nopCommerce demo stroe');
        cy.go('forward');
        cy.title().should('eq','nopCommerce demo stroe. Register');
        cy.go(-1);
        cy.title().should('eq','nopCommerce demo stroe');
        cy.go(1);
        cy.title().should('eq','nopCommerce demo stroe. Register');
        cy.reload(); // Refresh
    })

    it('Web Tables',function(){
        cy.visit('https://testautomationpractice.blogspot.com');
        // First locate the table by selector
        // Find value anywhere in table
        cy.get('table[name=booktable]').contains('td','Learn Selenium')
            .should('be.visible');
        // Find in specific row & coloumn
        cy.get('table[name=booktable]>tbody>tr:nth-child(2)>td:nth-child(3)').contains('td','Learn Selenium')
            .should('be.visible');            
    })

    it('Check value in every row by iterating',function(){
        cy.visit('https://testautomationpractice.blogspot.com');
        // Get column values & then use typescript
        // $e is first variable, index is increasing value e.g 1,2,3, $list is where the list will get stored
        cy.get('table[name=booktable]>tbody> td:nth-child(2)').each(($e,index,$list)) => {
            var text = $e.text()
            if(text.includes("Amod")){
                cy.get('table[name=booktable]>tbody> td:nth-child(1)').eq(index).then(function(bname){
                    const bookName = bname.text();
                    expect(bookName).to.equal('Master in Java')    
                })
            }
        }
    })

    // Cypress Hooks
    // 4 types: beforeEach, afterEach, before, after
    // before - setup
    // beforeEach & afterEach - Every test
    // after - Tear Down

})

/// <reference types="cypress" />

describe('Hooks Concept',function(){
    before(function(){
        cy.log('***********This is Setup Block************')
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
    it('', function(){
        cy.log('***********This is searching Test************')
    })
    it('', function(){
        cy.log('***********This is Advanced searching Test************')
    })
    it('', function(){
        cy.log('***********This is Listing products Test************')
    })    
})

// Cypress Fixture
// Fixture is a file containing data to use in test cases
// Data can be JSON format, png, etc
// In fixtures folder
// cy.fixture(filepath) // if not in fixture file

describe('Fixtures Demo Test',function(){

    before(function(){
        cy.fixture('example')
            .then(function(data){
                // variable to store the data
                // this is representing whole class so that it can be used outside of class anywhere
                this.data = data
            })
        // for referencing data file from somewhere else give full path
        // cy.fixture('file full path')
    })

    it('Fixture Demo',function(){
        // hard coded data
        cy.visit('https://admin-demo.nopcommerce.com/login/')
        cy.get('input[name=email]').type('admin@yourstore.com');
        cy.get('input[name=password]').type('admin');
        cy.get('input[name=submit]').click();

        // Using data file
        cy.visit('https://admin-demo.nopcommerce.com/login/')
        cy.get('input[name=email]').type(this.data.email);
        cy.get('input[name=password]').type(this.data.password);
        cy.get('input[name=submit]').click();
    })
})

    // Custom commands
    // Can create own commands in support folder in file commands.js

    describe('CustomSuite',function(){
        // here the login script is repeating all three tests
        it('LoginTest',function(){
            // hard coded data
            cy.visit('https://admin-demo.nopcommerce.com/login/')
            cy.get('input[name=email]').type('admin@yourstore.com');
            cy.get('input[name=password]').type('admin');
            cy.get('input[name=submit]').click();    
        })

        it('Add customer',function(){
            // hard coded data
            cy.visit('https://admin-demo.nopcommerce.com/login/')
            cy.get('input[name=email]').type('admin@yourstore.com');
            cy.get('input[name=password]').type('admin');
            cy.get('input[name=submit]').click();    
            cy.log('Adding Customer *******************')
        })

        it('Edit customer',function(){
            // hard coded data
            cy.visit('https://admin-demo.nopcommerce.com/login/')
            cy.get('input[name=email]').type('admin@yourstore.com');
            cy.get('input[name=password]').type('admin');
            cy.get('input[name=submit]').click();    
            cy.log('Editing Customer *******************')
        })

        // Creating custom command go commands.js in support folder

        // Usage of that customize command
        it('LoginTest',function(){
            cy.login('admin@yourstore.com','admin');
            cy.title.should('eq','Dashboard')
        })

        it('Add customer',function(){
            cy.login('admin@yourstore.com','admin');
            cy.log('Adding Customer *******************')
        })

        it('Edit customer',function(){
            cy.login('admin@yourstore.com','admin');
            cy.log('Editing Customer *******************')
        })
    })

    // POM in Cypress
    // Design pattern where page objects are seperated from Automation Test Scripts
    // Advantage : Reusability & Maintainbility
    // 1. Create page object class for every page to use in test script In integration make folder by name PageObjects
    // 2. Create new file by name of PageObjectPatternDemo.js and write following commands:

    /// <reference types="Cypress"/>
    // ./ represent parent in project  directory ../ current project directory inside this example
    // THen all elements & methods can be called
    import LoginPage from '../PageObjects/loginpage'
    describe('Test Suite',function(){
        // here the login script is repeating all three tests
        it('Valid Login Test',function(){
            const lp = new LoginPage();
            lp.visit();
            lp.fillEmail('admin@admin.com');
            lp.fillPassword('admin');
            lp.submit();
            cy.title().should('be.contain','Dashboard')
        })
    })

    // Command Line & Dashboard Services
    // To run Cypress from Commandline
    // Capture location of root folder directory
    // can run every spec file 

    // to run all spec files:
    // <wherver cypress is installed>cypress run e.g. command
    // node_modules\.bin\cypress run
    // will show complete report in tabular form

    // to run specific spec file 
    // additional argument --spec "file name"

    // Working with Dshboard features 
    // Tightly coupled with Github repository
    // Generate dashboard in github repo using git a/c or google a/c
    // Open test runner & then configure cypress dashboard service
    // Connect the dashboard service. It is cloud based service
    // In test runner > Click on Runs > Set up New Project to record
    // It will setup project in github & provide project id & key value
    // It will connect to dashboard page & then use the git / google account
    // Select owner in test runner window for setup project
    // Select public/private
    // Cypress.json will have the project id added
    // cypress run --record --key <project key>
    // node_modules\.bin\cypress run --record --key d63f3548-892b-41b9-bcb7-07ae3cdf9f9b
    // All screenshot & video will be available in dashboard
    
    // Running cypress scripts in Jenkins
    // package.json file has commands there are commands that can be run from cli & these can be run in Jenkins
    // The run command can be configured in package.json
    // To test can copy the command from CLI & put in value for test in package.json under script section
    // e.g. "test": "node_modules\\.bin\\cypress run"
    // replace \ with \\
    // so now to run type "npm run test"
    // so all test scripts will be run
    // In Jenkis to execute this command so e.g
    // "runtests":"npm run test"
    // so in jenkins this will get executed by using these keywords
    // Ctrl + c to cancel command
    // Go to jenkins> download / war file steps
    // Run jenkins.war file by going to jenkins file & command java -jar jenkins.war
    // jenins will come up in localhost:8080 port
    // In jenkins dashboard empty page will show
    // To run cypress project put project folder 
    // Make new project, freestyle type
    // In configuration page add the git repo
    // If on local go to advanced & select custom workspace
    // Provide project directory location
    // After that ccome down to build sectio 
    // Select execute windows bash command 
    // Put the commnads to run the command. Like the commands made in package.json
    // e.g npm run runtests
    // Go to dashboard of jenkins & click on project & clcik build now to run the jenkins project
    // If tests failing then page load time out can be added in package.json for commands
    // e.g "test": "node_modules\\.bin\\cypress run --config pageloadTimeout = 10000"
    

*/