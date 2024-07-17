# Gist Automation Test
## Description
Automated tests using Gist and Cypress.

## Scope
Test cases included cover this scenarios:
1. Creating a Gist
2. Reading a Gist
3. Deleting a Gist
4. List gists for unauthenticated user
5. List gists for authenticated user

## Tools used
- JavaScript
- Cypress
- Sublime

### Why JavaScript and Cypress?
JavaScript is the language I'm more familiar with and since Cypress is based on node.js I thought it would be a nice starter.

As for Cypress:
1. Just started studing it, so more familiar with
2. Easy to find documentation/information
3. Able to cover the functionalities needed for this project

## Installation and dependencies
1. Install git
[https://git-scm.com/book/en/v2/Getting-started-Installing-Git](https://git-scm.com/book/en/v2/Getting-started-Installing-Git)
2. Install cypress
```bash
npm install cypress
```
4. Install cypressmochawesome-reporter (for html report)
```bash
npm install cypress-mochawesome-reporter
```


## Execution
In order to run the script, just need to run the following using cypress
```bash
npx cypress run
```

or

If you want to run and generate html report
```bash
npx cypress run --reporter mochawesome
```
After execution is complete look for mochawesome-report folder inside main folder

## Test Run
![image](https://github.com/user-attachments/assets/25fb203d-a33a-4a36-9da9-01183e4ecd1d)

## Test Run with html report
![image](https://github.com/user-attachments/assets/a5344780-6961-45c9-8727-ee538cd4486a)


