import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
    styleUrls: ['../app.component.scss']
})
export class HomeComponent implements OnInit {

	username: string = '';

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly authService: AuthService,
	) { }

	public ngOnInit(): void {
		this.route.data.subscribe(routeData => {
			const data = routeData['data'];
			if (data) {
				this.username = data.email;
			}
		});
	}

	public async logout(): Promise<boolean> {
		await this.authService.logout();
		return this.router.navigate(['/login']);
	}
}
