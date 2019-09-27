import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private auth: AuthenticationService, public menuCtrl: MenuController, public router: Router) {
  }

  logout() {
    this.auth.logout();
    this.menuCtrl.close('mainMenu');
    this.goHome();
  }

  goHome() {
    this.router.navigateByUrl('tabs/feed');
  }
}
