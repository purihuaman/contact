import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { CookieService } from "ngx-cookie-service";

@Injectable({
	providedIn: "root",
})
export class LoginService {
	private token: string = "";

	constructor(private router: Router, private cookieService: CookieService) {}

	login(emal: string, password: string) {
		firebase
			.auth()
			.signInWithEmailAndPassword(emal, password)
			.then((resp) => {
				firebase
					.auth()
					.currentUser?.getIdToken()
					.then((token) => {
						this.token = token;
						this.cookieService.set("token", this.token);
						this.router.navigate(["/"]);
					});
			});
	}

	getIdToken() {
		// return this.token;
		return this.cookieService.get("token");
	}

	isLoggedIn(): string {
		// return this.token;
		return this.cookieService.get("token");
	}

	logout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				this.token = "";
				this.cookieService.set("token", this.token);
				this.router.navigate(["/"]);
				window.location.reload();
			});
	}
}
