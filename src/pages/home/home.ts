import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  Student(){
   this.navCtrl.push("StudentPage");
 }
  teacher(){
  this.navCtrl.push("TeacherPage");
}
}
