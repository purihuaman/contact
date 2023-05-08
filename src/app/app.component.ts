import { LoginService } from "./login/login.service";
import { Component } from "@angular/core";

import firebase from "firebase/compat/app";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "contact";

	constructor(private loginService: LoginService) {}

	ngOnInit(): void {
		firebase.initializeApp({
			apiKey: "AIzaSyCw_qk94bym_TQ1ty_h_9KHopcrMPUZ8Gg",
			authDomain: "mis-contactos-cc490.firebaseapp.com",
		});
	}

	login() {
		return this.loginService.isLoggedIn();
	}

	logout() {
		this.loginService.logout();
	}
}
