Feature: Purchase and Manage Crypto Currencies
I want to shop on crypto currencies
 
Scenario: Purchasing Currency
Given I am on the "Dashboard" page
When I add the following transactions
| CryptoCurrency  | units     | price        |
| Stellar         | 1         | 100          |
| Bitcoin         | 1         | 100          |
| Bitcoin         | 2         | 99           |
| Bitcoin         | 1         | 101          |
| XRP             | 2         | 50           |
Then the following transactions get added
| CryptoCurrency  | units     | price        |
| Stellar         | 1         | 100          |
| Bitcoin         | 4         | 300          |
| XRP             | 2         | 50           |
When I select "Bitcoin" on the dashboard 
Then I am presented with following list of the "Bitcoin" transactions
| TransactionID  | units     | price             |
| 2              | 1         | $100.00 AUD       |
| 3              | 2         | $99.00 AUD        |
| 4              | 1         | $101.00 AUD       |
When I "delete" the following transactions
| TransactionID  | 
| 4              |
Then I am presented with following list of the "Bitcoin" transactions
| TransactionID  | units     | price             |
| 2              | 1         | $100.00 AUD       |
| 3              | 2         | $99.00 AUD        |
When I "edit" the following transactions
| TransactionID  | units     | price             |
| 2              | 2         | $200.00 AUD       |
Then I am presented with following list of the "Bitcoin" transactions
| TransactionID  | units     | price             |
| 2              | 2         | $200.00 AUD       |
| 3              | 2         | $99.00 AUD        |
when I click on the "Dashboard" link
Then I am returned to the "Dashboard" page