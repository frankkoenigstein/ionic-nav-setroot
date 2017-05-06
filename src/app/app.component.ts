import { Component, OnInit, ViewChild } from '@angular/core';
import { App, NavController, Platform, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage:any = LoginPage;
  @ViewChild("content") public navCtrl: NavController;

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private app: App
  ) {
    this.platform.ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
  }

  public ngOnInit(): void {
    this.app.viewDidEnter.subscribe((view: ViewController) => {
      console.log("viewDidEnter", view.name);
      this.printNav(this.app.getRootNav());
    });

    this.platform.ready()
      .then(() => {
        // this.app.getRootNav().setRoot(LoginPage)
      })
  }

  private printNav(nav: NavController) {
    console.log(JSON.stringify(this.getNavObj(nav), null, 2));
  }

  private getNavObj(nav: NavController) {
    if (!nav) {
      return null;
    }

    return {
      parent: this.getNavObj(nav.parent),
      views: nav.getViews().map((view) => this.getViewObj(view))
    };
  }

  private getViewObj(view: ViewController) {
    if (!view) {
      return null
    }

    return {
      name: view.name,
      component: view.component || null,
      // nav: this.getNavObj(view.getNav())
    };
  }
}
