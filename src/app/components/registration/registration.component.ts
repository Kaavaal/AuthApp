import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserData } from 'src/app/core/models/user.model';

@Component({
    selector: 'app-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['../app.component.scss']
})
export class RegistrationComponent {

    public registrationForm: FormGroup;
    public message: string;

    constructor(
        private readonly router: Router,
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService
    ) {
        this.createForm();
    }

    private createForm(): void {
        this.registrationForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public async register(data: UserData): Promise<void> {
        try {
            await this.authService.register(data);
            this.message = 'Your account has been created';
            this.router.navigate(['/home']);
        } catch (error) {
            this.message = error.message;
        }
    }
}
