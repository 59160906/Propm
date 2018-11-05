import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {StudentHomePage} from '../student-home/student-home';
import {ChecklistServiceProvider} from '../../providers/checklist-service/checklist-service'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private checklistsevice:ChecklistServiceProvider,private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Home(){
    this.navCtrl.push(HomePage);
  }
  
  loginStudent(id,password){
    console.log(id);
    console.log(password);
    
    this.checklistsevice.loginstudent(id,password).subscribe((response) => {
      if (response.data != null)
        this.navCtrl.setRoot(StudentHomePage);
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
