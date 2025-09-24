# amaysim-tech-challenge
QA Tech Challenge repository created as part of the interview process in Amaysim

Setting Up

1. Clone Repository via SSH git@github.com:racbenipayo/amaysim-tech-challenge.git in Visual Studio Code

2. Upon cloning, open terminal and input command 

> npm init playwright@latest

to initialize / add playwright to an existing project

When prompted, choose / confirm:

a. TypeScript or JavaScript (default: TypeScript)

b. Tests folder name (default: tests, or e2e if tests already exists)

c. Add a GitHub Actions workflow (recommended for CI)

d. Install Playwright browsers (default: yes)

Re-running the command does not overwrite the tests

3. Run the following command to ensure all dependencies and packages are installed

> npm install -D @playwright/test@latest
> npx playwright install --with-deps

Running the tests

1. Input command below to run the tests (default: PROD environment)

For headless tests:

> npx playwright test 


For headed tests:
> npx playwright test --headed


To run a specific test:
> npx playwright test tests/{file_name}.spec.ts


To run the tests in STAGING environment, go to playwright.config.ts, change the URL to
correct URL, then run the following command

> STAGING=1 npx playwright test

To run the tests in the terminal, open terminal then navigate to the directory where this project is saved

> cd {path}/amaysim-tech-challenge

Execute test using:

> npx playwright test

To run in docker, run the following commands:

Create a Docker image named playwright-tests based on the Dockerfile
> docker build -t playwright-tests .  

Run test after image is created
> docker run --rm -v $(pwd):/app -w /app playwright-tests

2. To check test run report dashboard filterable by the browser, passed, failed, skipped, flaky and more, run the following command

> npx playwright show-report

This dashboard is configured to open by default when there are failing tests


Folders explanation

tests/e2e - where end-to-end test can be found

tests/pages - where page object models can be found
