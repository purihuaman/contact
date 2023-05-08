import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { LoginService } from "./login.service";

export const authLogin: CanActivateFn = () => {
	const loginService = inject(LoginService);
	const router = inject(Router);

	if (!loginService.isLoggedIn()) {
		router.navigate(["login"]);
		return false;
	}

	return true;
};
