import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { TeacherHomePage } from '../teacher-home/teacher-home';
import { HomePage } from '../home/home';
import {ChecklistServiceProvider} from '../../providers/checklist-service/checklist-service'
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private checklistsevice:ChecklistServiceProvider,private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginTPage');
  }
 
  
  Home(){
    this.navCtrl.push(HomePage);
  }
  login(id,password){
    
    this.checklistsevice.loginteacher(id,password).subscribe((response) => {
      if (response.data != null)
        this.navCtrl.setRoot(TeacherHomePage);
      else{
        let alert = this.alertCtrl.create({
          title: 'Can not sign in',
          message: 'email or password incorrect',
          buttons: [
            {
              text: 'ok',
              role: 'cancel',
             
            }
          ]
        });
        alert.present()
      }
    })

  }
}
