import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { UserData } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private readonly firebaseAuth: AngularFireAuth
    ) { }

    public async register(data: UserData): Promise<any | Error> {
        const { email, password } = data;
        return await firebase.auth()
            .createUserWithEmailAndPassword(email, password);
    }

    public async login(data: UserData): Promise<any | Error> {
        const { email, password } = data;
        return await firebase.auth()
            .signInWithEmailAndPassword(email, password);
    }

    public async logout(): Promise<any | Error> {
        if (firebase.auth().currentUser) {
            this.firebaseAuth.auth.signOut();
            return Promise.resolve();
        }

        return Promise.reject();
    }
}