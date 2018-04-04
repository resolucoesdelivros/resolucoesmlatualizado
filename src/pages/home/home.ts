import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName: string;
  imgUrl: string;
  
  constructor(public navCtrl: NavController,private authService: AuthService, afAuth:AngularFireAuth) {
    
    const authObserver = afAuth.authState.subscribe(user => {
      this.displayName = '';
      this.imgUrl = '';
      if(user){
        this.displayName = user.displayName;
        this.imgUrl = user.photoURL;
        authObserver.unsubscribe();
      }
    })
  }
  
}
