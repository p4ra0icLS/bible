import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsModel } from '../../models/settings-model';
import { SettingsService } from '../../providers/settings-service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  settings: SettingsModel = new SettingsModel();
  availablesFonts: any = SettingsModel.AVAILABLE_FONTS;

  constructor(public navCtrl: NavController, public settingsService: SettingsService) {
    this.settingsService.getSettings().then(settings => {
      this.settings = settings;
    });
  }

  ionViewWillLeave() {
    this.settingsService.update(this.settings);
  }
}
