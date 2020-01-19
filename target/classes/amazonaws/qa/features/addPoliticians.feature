Feature: Create Politician Test

Scenario Outline: Validate Politician getting Created

Given User Opens browser
Then User is on Registation Page
Then User enters the details "<username>" and "<country>" and "<date>" and "<url>" and "<risktype>"
Then User clicks on Save button 
Then User gets a popup user being added with "<username>"
Then User accepts the popup and close the browser

Examples:

     | username | country | date | url | risktype |
     | John Doe | UK | 02/07/2002 | https://www.google.com/ | Low |
     | Lopa | UK | 02/07/2002 | https://www.google.com/ | Low | 
     | John Doe | USA | 2002/07/10 | https://www.google.com/ | Low | 
     | Green | USA | 02/07/2002 | https://www.google.com/ | LARGE |
     | Yellow | xyz | 02/07/2002 | www://google.com/ | Low |
     | John Doe | xyz | 02/07/2002 | www://google.com/ | Low |
