import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { SigninwithemailPage } from './../pages/signinwithemail/signinwithemail';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { AuthService } from '../providers/auth-service';

import { GooglePlus } from '@ionic-native/google-plus';

const firebaseConfig = {
  apiKey: "AIzaSyABDqOsxFnguAmC58j1wLrJuD3BfJilmhc",
  authDomain: "resolucoesatualizado.firebaseapp.com",
  databaseURL: "https://resolucoesatualizado.firebaseio.com",
  projectId: "resolucoesatualizado",
  storageBucket: "",
  messagingSenderId: "449067665503"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResetpasswordPage,
    SigninPage,
    SignupPage,
    SigninwithemailPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResetpasswordPage,
    SigninPage,
    SignupPage,
    SigninwithemailPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    GooglePlus
  ]
})
export class AppModule {}
