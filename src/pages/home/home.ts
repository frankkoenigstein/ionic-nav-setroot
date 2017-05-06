import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { LoginService } from "../../services/login";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private app: App,
    public loginService: LoginService
  ) {

  }

  public logout() {
    this.app
      .getRootNav()
      .popToRoot()
      .then(() => this.app.getRootNav().setRoot(LoginPage))
      .catch((reason) => console.error("HomePage", "logout", reason));
  }

}
