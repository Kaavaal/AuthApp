import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
    styleUrls: ['../app.component.scss']
})
export class LoginComponent {

    public loginForm: FormGroup;
    public errorMessage: string;

	constructor(
		private readonly router: Router,
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService
	) {
        this.createForm();
	}

	private createForm(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
    }

    public async login(data: UserData): Promise<void> {
        try {
            await this.authService.login(data);
            this.router.navigate(['/home']);
        } catch (error) {
            this.errorMessage = error.message;
        }
    }
}
