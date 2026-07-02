# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegressionSuite.spec.ts >> Regression Suite >> TC002 logout
- Location: tests\RegressionSuite.spec.ts:10:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Test source

```ts
  1  | // Reusable functions / methods
  2  | import { Global } from "./Global";
  3  | export class General extends Global{
  4  | async OpenApplication(){
> 5  |     await this.page.goto(this.url);
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  6  |     console.log("Application is opened successfully");
  7  | }
  8  | async loginToApplication(){
  9  |     await this.page.locator(this.textbox_loginname).fill(this.username);
  10 |     await this.page.locator(this.textbox_password).fill(this.password);
  11 |     await this.page.locator(this.button_login).click();
  12 |     console.log("Login is done successfully");
  13 | }
  14 | async logoutFromApplication(){
  15 |     //await this.page.locator(this.link_logout).click();
  16 |     console.log("Logout is done successfully");
  17 | }
  18 | }
  19 | 
```