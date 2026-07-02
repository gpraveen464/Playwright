//Test data and objects / elements
import { Page } from "@playwright/test";
export class Global{

    constructor (public page: Page) {
        this.page = page;
     }

public url: string = "https://ctcorphyd.com/SureshIT/login.php";
public username: string = "sureshit";
public password: string = "sureshit";


public textbox_loginname   : string = "//input[@name='txtUserName']";
public textbox_password    : string = "//input[@name='txtPassword']";
public button_login        : string = "//input[@value='Login']"
public link_logout       : string = "//a[text()='logout']";

}