import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I am on the {string} page', (pageType) => {
    cy.visit(Cypress.env('baseUrl'));
});

When('I add the following transactions', (dataTable) => {
    const currencyToAdd = dataTable.hashes();
    for (let i = 0; i < currencyToAdd.length; i++) {
    
        cy.get('.css-1hwfws3')
    .click()
    cy.get('[id^="react-select-"]').contains(currencyToAdd[i].CryptoCurrency).click({ force: true });
    
    cy.get('[name=units]').click();
    cy.get('[name=units]').type(currencyToAdd[i].units);

    cy.get('[name=price]').click();
    cy.get('[name=price]').type(currencyToAdd[i].price);

    cy.contains('Record').click();
    }
});

Then('the following transactions get added', (dataTable) => {
    const transactionsAdded = dataTable.hashes();
    for (let i = 0; i < transactionsAdded.length; i++) {
    
    cy.get('[class="CurrencyOverview_header__15t1q"]').eq(i)
    .contains(transactionsAdded[i].CryptoCurrency);

    cy.get('[class="CurrencyOverview_value__2pPWK"]').eq(2*i+i+1).contains(transactionsAdded[i].units);
    cy.get('[class="CurrencyOverview_value__2pPWK"]').eq(2*i+i+2).contains(transactionsAdded[i].price);

    }
}); 

When('I select {string} on the dashboard',(selectedCrypto) => {
    cy.get('[class="CurrencyOverview_header__15t1q"]')
    .contains(selectedCrypto).click();
});

Then('I am presented with following list of the {string} transactions' , (selectedCrypto, dataTable) => {
    const modifiedCurrency = selectedCrypto.toLowerCase().replace(/ /g,"_");
    const transactionsAdded = dataTable.hashes();
    cy.url().should('include', modifiedCurrency);
    
    for (let i = 0; i < transactionsAdded.length; i++) {
        cy.get('[class="TransactionList_cell__3LQJL"]').eq(2*i).contains(transactionsAdded[i].TransactionID);
        cy.get('[class="TransactionList_cell__3LQJL"]').eq(2*i+1).contains(transactionsAdded[i].units);
        cy.get('[class="TransactionList_cell__3LQJL TransactionList_end__1_Yzf"]').eq(i).contains(transactionsAdded[i].price);
    }
});

When('I {string} the following transactions', (userAction, dataTable) => {
    const transactionsAdded = dataTable.hashes();
    for (let i = 0; i < transactionsAdded.length; i++) {
        if (cy.get('[class="TransactionList_cell__3LQJL"]').eq(2*i).contains(transactionsAdded[i].TransactionID))
        {
           //class="TransactionList_icon-container__3jfR5" 
        }


    }


});