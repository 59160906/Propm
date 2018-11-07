import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {TeacherHomePage} from '../teacher-home/teacher-home'
import {ChecklistServiceProvider} from '../../providers/checklist-service/checklist-service'

/**
 * Generated class for the RegisterTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-t',
  templateUrl: 'register-t.html',
})
export class RegisterTPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private checklistservice:ChecklistServiceProvider ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterTPage');
  }

  resigterTeacher(m,name,faculty,email,password,confirmPassword){
    if (m==null || name== null || faculty== null || email ==null || password==null || confirmPassword == null){
      let alert = this.alertCtrl.create({
        title: 'Can not Register',
        message: 'Please input information agian',
        buttons: [
          {
            text: 'ok',
            role: 'cancel',
           
          }
        ]
      });
      alert.present();
    }else if(password != confirmPassword){
      let alert = this.alertCtrl.create({
        title: 'Can not Register',
        message: 'Enter the password synchronization',
        buttons: [
          {
            text: 'ok',
            role: 'cancel',
           
          }
        ]
      });
      alert.present();
      
    }else{
      let alert = this.alertCtrl.create({
        title: 'สมัครใช้งานสำเร็จ',
        message: 'เราจะนำคุณเข้าสู่หน้า เข้าสู่ระบบ',
        buttons: [
          {
            text: 'ok',
            role: 'cancel',
            handler: () => {
              this.addUser(m,name,faculty,email,password);
             
            }
          }
        ]
      });
     alert.present();
    }
    
    
  }
    async addUser(m,name,faculty,email,password){
      await this.checklistservice.createUserTeacher(m,name,faculty,email,password);
      this.navCtrl.setRoot(TeacherHomePage)  
  }

}