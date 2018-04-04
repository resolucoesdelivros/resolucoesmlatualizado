import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


import { HomePage } from '../home/home';
import { SigninwithemailPage } from './../signinwithemail/signinwithemail';
import { SignupPage } from '../signup/signup';

import { User } from '../../providers/user';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private authService: AuthService) {
    }
    
    createAccount(){
      this.navCtrl.push(SignupPage);
    }
    SigninwithemailPage() {
      this.navCtrl.push(SigninwithemailPage);
    }
    
    signInWithGoogle(){
      this.authService.signWithGoogle()
      .then(()=> {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error)=> {
        this.toastCtrl.create({duration:3000, position:'bottom', message:'Erro ao efetuar o login'})
        .present();
      });
    }
  }
  