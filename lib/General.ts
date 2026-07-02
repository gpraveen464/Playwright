// Reusable functions / methods
import { Global } from "./Global";
export class General extends Global{
async OpenApplication(){
    await this.page.goto(this.url);
    console.log("Application is opened successfully");
}
async loginToApplication(){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login is done successfully");
}
async logoutFromApplication(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout is done successfully");
}
}
