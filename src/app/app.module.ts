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
    TeacherPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    TeacherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
