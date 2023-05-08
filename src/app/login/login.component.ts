import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	email: string = "test@gmail.com";
	password: string = "test123";

	constructor(private loginService: LoginService) {}

	login(form: NgForm) {
		this.email = form.value.email;
		this.password = form.value.password;

		this.loginService.login(this.email, this.password);
	}
}
