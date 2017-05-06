import { Component } from "@angular/core";
import { App } from "ionic-angular";
import { LoginService } from "../../services/login";
import { TabsPage } from "../tabs/tabs";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public name: string = "Jon";

    constructor(
        private app:App,
        private loginService: LoginService
    ) {

    }

    public login() {
        this.app
            .getRootNav()
            .setRoot(TabsPage)
            .catch((reason) => console.error("LoginPage", "login", reason));
    }
}
