import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class AuthService {
    
    constructor(
        private angularFireAuth: AngularFireAuth,
        private googlePlus: GooglePlus
    ){
        
    }
    
    createUser(user:User){
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    }
    signIn(user: User) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    signOut(){
        if (this.angularFireAuth.auth.currentUser.providerData.length){
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++){
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];
                
                if(provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID){
                    return this.googlePlus.disconnect()
                    .then(()=> {
                        return this.signOutFirebase();
                    });
                }
            }
        }
        return this.signOutFirebase();
    }
    signOutFirebase() {
        return this.angularFireAuth.auth.signOut();
    }
    signWithGoogle() {
        return this.googlePlus.login({
            'webClientId': '449067665503-r4niuvbn0k26rm9vekmm89d570qj1hqg.apps.googleusercontent.com',
            'offline': true
        })
        .then(res => {
            return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            .then((user: firebase.User) => {
                return user.updateProfile({displayName: res.displayName, photoURL:res.imageUrl})
            });
        });
    }
    
    resetPassword(email: string) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }
}
