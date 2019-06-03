import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class UserService {
    
    constructor() { }

    public getCurrentUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user: firebase.User) => {
                console.log(user);
                if (user) return resolve(user);

                reject(new Error('No user was found'));
            });
        });
    }
}