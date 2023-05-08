import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { UpdateContactComponent } from "./update-contact/update-contact.component";
import { LoginComponent } from "./login/login.component";
import { authLogin } from "./login/auth-login.guard";

const routes: Routes = [
	{ path: "", component: ContactsComponent, canActivate: [authLogin] },
	{ path: "login", component: LoginComponent },
	{
		path: "update/:id",
		component: UpdateContactComponent,
		canActivate: [authLogin],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
