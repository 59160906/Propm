import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {StudentHomePage} from '../student-home/student-home'
import {ChecklistServiceProvider} from '../../providers/checklist-service/checklist-service'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private checklistservice:ChecklistServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(m,id,name,fauctly,major,email,password,confirmPassword){

    var data={ 
      student_id:id,
      student_name:m+name,
      fauctly:fauctly,
      major:major,
      email:email,
      password:password,
 
    }
    console.log(data);
    
    if (m==null || id== null || name== null || fauctly== null || major==null || email ==null || password==null || confirmPassword == null){
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
              this.addUser(m,id,name,fauctly,major,email,password);
             
            }
          }
        ]
      });
     alert.present();
    }
  


  }
    async addUser(m,id,name,fauctly,major,email,password){
      await this.checklistservice.createUser(m,id,name,fauctly,major,email,password);
      this.navCtrl.setRoot(StudentHomePage)    
    }
  }

