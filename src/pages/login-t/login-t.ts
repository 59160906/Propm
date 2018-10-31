import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-t',
  templateUrl: 'login-t.html',
})
export class LoginTPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginTPage');
  }
  goTeacherhome(){
    this.navCtrl.setRoot(TeacherHomePage)
  }
  Home(){
    this.navCtrl.push(HomePage);
  }

}
