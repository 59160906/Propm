import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeacherHomePage } from '../pages/teacher-home/teacher-home'
import { LoginTPage } from '../pages/login-t/login-t';
import { CreateclassPage } from '../pages/createclass/createclass';
import { JoinclassPage } from '../pages/joinclass/joinclass';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegisterTPage } from '../pages/register-t/register-t';
import { StudentPage } from '../pages/student/student';
import { StudentHomePage } from '../pages/student-home/student-home';
import { TeacherPage } from '../pages/teacher/teacher';
import { ChecklistServiceProvider } from '../providers/checklist-service/checklist-service';
import { HttpModule } from '@angular/http'; 
import { InfoPage } from '../pages/info/info';
import { InfoTPage } from'../pages/info-t/info-t';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeacherHomePage,
    LoginTPage,
    CreateclassPage,
    JoinclassPage,
    LoginPage,
    RegisterPage,
    RegisterTPage,
    StudentPage,
    StudentHomePage,
    TeacherPage,
    InfoPage,
    InfoTPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeacherHomePage,
    LoginTPage,
    CreateclassPage,
    JoinclassPage,
    LoginPage,
    RegisterPage,
    RegisterTPage,
    StudentPage,
    StudentHomePage,
    TeacherPage,
    InfoPage,
    InfoTPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChecklistServiceProvider
  ]
})
export class AppModule {}
